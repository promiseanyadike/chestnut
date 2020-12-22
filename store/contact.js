export const state = () => ({
	contactPages: {},
	page: {},
	page: [],
})

export const mutations = {


	setcontactpage(state, data) {
		state.contactPages = data
	},

	setPage(state, data) {
		state.page = data;
	},
	// setPage(state, data) {
	// 	state.pagesArray = data
	// },

}


export const actions = {

	async getContactInfo({ commit }) {

		try {
			let id = 1;
			let req = await this.$axios.$get(`api/contact/${id}`)
			if (req.code == 200) {
				let page = req.store.Contact;
				console.log(page)
				console.log("test");
				commit('setcontactpage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async editPage({
		commit
	}) {
		try {
			let id = 1
			let {
				data
			} = await this.$axios.post(`api/contact/${id}`)
			if (data.code == 200) {
				commit('setPage', data)
				return 1
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	}
}

