import { copy } from '@/utils/helpers';
export const state = () => ({
	gallery: [],
	image: {},
	count: 0
});

export const mutations = {
	setGallery(state, data) {
		state.gallery = data;
	},

	setCount(state, data) {
		state.count = data;
	},

	// setInstagramGallery(state, data) {
	//   let newData = data.map(i => {
	//     i.image = {data: ""};
	//     i.image.data = i.images.standard_resolution.url
	//     return i;
	//   })
	//   state.gallery = newData;
	// },
	setInstagramGallery(state, data) {
		state.gallery = data;
	},

	setImage(state, data) {
		state.image = data;
	}
};

export const actions = {
	async getGallery({ commit }, params) {
		try {
			let { data } = await this.$axios.get(`api/gallery?page=${params.page}&offset=${params.offset}`);
			if (data.code == 200) {
				let list = data.store.list;
				commit('setGallery', list);
			}
		} catch (error) {
			console.log("An error occured", error);
		}
	},
	async getInstagramGallery({ commit }) {
		try {
			// let { data } = await this.$axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=550744093.6dd2db4.90eacb3fd04f4a929346992b4ea1eb5a`);
			let { data } = await this.$axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJWNHRTYjhVVkJDejRTR3ZA5VVhrdXViZAjljajNyTTVLcWJjLWxvdDVIQWRMb1ZA1ek1ObzNYV2x5ZAkxlZA3kySjdIbUZAoTHZApa1dZAUW5PSnhsUDBPWk1VNXNGbThQZAEIwODJRYzV1UG9FaWE2WmRtbAZDZD');
			// let { meta } = data;
			// if (meta.code == 200) {
			//   let { data: list } = data;
			//   commit('setInstagramGallery', list);
			// }
			let { data: list } = data;
			console.log(list)
			commit('setInstagramGallery', list);
		} catch (error) {
			console.log("An error occured", error);
		}
	},

	async getCount({ commit }) {
		try {
			let { data } = await this.$axios.get(`api/gallery/count`);
			if (data.code == 200) {
				let count = data.store.count;
				commit('setCount', count);
			}
		} catch (error) {
			console.log("An error occured", error);
		}
	},

	async getImage({ commit }, id) {
		try {
			let { data } = await this.$axios.get(`api/gallery/${id}`);
			if (data.code == 200) {
				let gallery = data.store.gallery;
				commit('setImage', gallery);
			}
		} catch (error) {
			console.log("An error occured", error);
		}
	}
};