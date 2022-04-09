'use strict';

Vue.createApp({
	// reactive state
	data() {
		return {
			message: "Hello Vue!",
			count: 0,
			rawHtml: `<span style="color: red">This should be red.</span>`,

			maxImgCountString: 10,
			imgCount: 4,
			modalImgUrl: "",
			modalImgName: "",
		};
	},

	methods: {
		increment() {
			this.count++;
		}
	},

	// We can use computed variables like any other declared in data() (I think)
	computed: {
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
}).mount("#app");