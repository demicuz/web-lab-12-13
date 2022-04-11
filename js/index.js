'use strict';

function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}

const app = Vue.createApp({
	data() {
		return {
			images: [
				{
					name: "Doggo",
					url: "https://picsum.photos/id/1025/600",
					uuid: uuidv4()
				},
				{
					name: "Subway",
					url: "https://picsum.photos/id/1033/600/500",
					uuid: uuidv4()
				},
				{
					name: "Castle",
					url: "https://picsum.photos/id/1040/600/400",
					uuid: uuidv4()
				},
			],

			maxImgCountString: "10",
			modalImgUrl: "",
			modalImgName: "",

			showAddedSuccess: false
		};
	},
	
	methods: {
		onAddImage() {
			const image = {
				name: this.modalImgName,
				url: this.modalImgUrl,
				uuid: uuidv4()
			};
			this.images.unshift(image);
			
			this.modalImgName = "";
			this.modalImgUrl = "";

			this.showAddedSuccess = true;
			setTimeout(() => this.showAddedSuccess = false, 2000);
		},

		onDeleteImage(uuid) {
			const imgIndex = this.images.findIndex((img) => img.uuid === uuid);

			if (imgIndex > -1) {
				this.images.splice(imgIndex, 1);
			} else {
				console.log("Image with uuid", uuid, "wasn't found!");
			}
		}
	},

	computed: {
		imgCount() {
			return this.images.length;
		},

		maxImgCount() {
			const cnt = parseInt(this.maxImgCountString);
			return cnt && cnt > 0 ? cnt : 0;
		},

		progressWidth() {
			if (this.maxImgCount > 0 && this.imgCount <= this.maxImgCount) {
				return 100 * this.imgCount / this.maxImgCount;
			} else {
				return 100;
			}
		},

		isBtnAddDisabled() {
			return this.modalImgName.length === 0
				|| this.modalImgUrl.length === 0;
		},

		isTooManyImages() {
			return this.imgCount > this.maxImgCount;
		}
	}
});

app.mount("#app");