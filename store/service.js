export const state = () => ({
	servicePages: {},
	servicePage: []
})


export const mutations = {


	setservicepage(state, data) {
		state.servicePage = data
	}
}

export const actions = {

	async getServicePage({ commit }) {

		try {
			let req = await this.$axios.$get(`api/area`)
			if (req.code == 200) {
				let page = req.store.list;
				// console.log(page)
				commit('setservicepage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	}

}
