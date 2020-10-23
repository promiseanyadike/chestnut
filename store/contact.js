export const state = () => ({
	contactPages: {}
})

export const mutations = {


	setcontactpage(state, data) {
		state.contactPages = data
	}
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
	}

}
