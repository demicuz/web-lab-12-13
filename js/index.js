'use strict';

Vue.createApp({
	// reactive state
	data() {
		return {
			message: "Hello Vue!",
			count: 0,
			rawHtml: `<span style="color: red">This should be red.</span>`,

			maxImgCountString: 10,
		};
	},

	methods: {
		increment() {
			this.count++;
		}
	},

	computed: {
		maxImgCount() {
			const cnt = parseInt(this.maxImgCountString);

			if (cnt && cnt > 0) {
				return cnt;
			} else {
				return 0;
			}
		}
	}
}).mount("#app");