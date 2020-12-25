export const state = () => ({
	aboutPages: {},
	allFirmPage: []
})


export const mutations = {


	setaboutpage(state, data) {
		state.aboutPages = data
	},

	setPracticeAreas(state, data) {
		let newData = data;
		let x = data.find(f => f.id === 0);
		if (!(x == null)) {
			newData.splice(newData.indexOf(x), 0);
			state.allFirmPage = newData
		}
		else {
			state.allFirmPage = data
		}
	}

	// setPracticeAreas(state, data) {
	// 	state.allFirmPage = data
	// }
}

export const actions = {

	async getAboutPage({ commit }) {

		try {
			let id = 1;
			let req = await this.$axios.$get(`api/about/${id}`)
			if (req.code == 200) {
				let page = req.store.About;
				console.log(page);
				console.log('akara');
				commit('setaboutpage', page);
				return page
			}
		} catch (error) {
			console.log("an error occured", error);
		}
	},

	async getFirmPage({
		commit
	}, params) {
		try {
			let data = await this.$axios.$get('api/about')
			if (data.code == 200) {
				let list = data.store.list
				console.log(list);
				commit('setPracticeAreas', list)
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	}

}
