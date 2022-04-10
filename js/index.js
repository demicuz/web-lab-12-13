'use strict';

const app = Vue.createApp({
	data() {
		return {
			images: [
				{
					name: "first image",
					url: "https://picsum.photos/600",
					uuid: crypto.randomUUID()
				},
				{
					name: "second image",
					url: "https://picsum.photos/600/500",
					uuid: crypto.randomUUID()
				},
				{
					name: "third image",
					url: "https://picsum.photos/600/400",
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
			setTimeout(() => this.showAddedSuccess = false, 1000);
		}
	},

	computed: {
		// TODO maybe remove this variable?
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
	}
});

app.mount("#app");