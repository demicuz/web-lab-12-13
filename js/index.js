'use strict';

const app = Vue.createApp({
	data() {
		return {
			images: [
				{
					name: "Doggo",
					url: "https://picsum.photos/id/1025/600",
					uuid: crypto.randomUUID()
				},
				{
					name: "Subway",
					url: "https://picsum.photos/id/1033/600/500",
					uuid: crypto.randomUUID()
				},
				{
					name: "Castle",
					url: "https://picsum.photos/id/1040/600/400",
					uuid: crypto.randomUUID()
				},
			],

			maxImgCountString: "10",
			modalImgUrl: "",
			modalImgName: "",

			showAddedSuccess: false
		};
	},
	
	methods: {
		onAddClick() {
			const image = {
				name: this.modalImgName,
				url: this.modalImgUrl,
				uuid: crypto.randomUUID()
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