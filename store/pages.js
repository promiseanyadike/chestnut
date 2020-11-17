export const state = () => ({
	homePage: {},
	AboutPage: {},
	aboutPages: [],
	contactPage: {},
	homePage: [],
	galleryPage: {},
	servicePage: {}
})

export const mutations = {

	sethomepage(state, data) {
		state.homePage = data
	},

	setaboutpage(state, data) {
		state.AboutPage = data
	},
	setcontactpage(state, data) {
		state.contactPage = data
	},
	setgallerypage(state, data) {
		state.galleryPage = data
	},
	setservicepage(state, data) {
		state.servicePage = data
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
			let id = 5
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store.page.attributes.header;
				commit('setaboutpage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async getAreaPage({ commit }) {
		try {
			let id = 4
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store.page.attributes.header
				console.log(page);
				commit('setservicepage', page);
				console.log(page)
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async getContactPage({ commit }) {
		try {
			let id = 3
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
	},

	async getGalleryPage({ commit }) {
		try {
			let id = 2
			let req = await this.$axios.$get(`api/page/${id}`)
			if (req.code == 200) {
				let page = req.store;
				console.log(page)
				commit('setgallerypage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	}
}