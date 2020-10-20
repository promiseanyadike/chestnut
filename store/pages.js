export const state = () => ({
	homePage: {},
	aboutPage: {},
	aboutPage: [],
	contactPage: {},
	homePage: []
})

export const mutations = {

	sethomepage(state, data) {
		state.homePage = data
	},

	setaboutpage(state, data) {
		state.aboutPage = data
	},
	setcontactpage(state, data) {
		state.contactPage = data
	}
}

export const actions = {
	// async getPage({ commit }, param) {
	// 	try {
	// 		let req = await this.$axios.$get(`api/${param.url}`)
	// 		let page = req.store;
	// 		commit('sethomepage', page);
	// 	} catch (error) {
	// 		console.log("an error occured", error)
	// 	}
	// }
	async getHomePage({ commit }) {
		try {
			let id = 1
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store;
				commit('sethomepage', page);
				console.log(page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async getAboutPage({ commit }) {
		try {
			let id = 2
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store;
				commit('setaboutpage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async getContactPage({ commit }) {
		try {
			let id = 5
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store;
				console.log(page)
				commit('setcontactpage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	}
}