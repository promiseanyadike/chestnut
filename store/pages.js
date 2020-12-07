export const state = () => ({
	pages: [],
	page: {},
	page: [],
	pageId: null
})

export const mutations = {
	setPageList(state, data) {
		state.pages = data;
	},

	setPage(state, data) {
		state.page = data;
	},

	// setPage(state, data) {
	// 	state.pagesArray = data
	// },
	setPageId(state, data) {
		state.pageId = data;
	}
}

// export const getters = {
//   getUserList: state => {
//     return _.map(state.users, i => {
//       let user = _.extend({}, i)
//       user.full_name = `${i.first_name} ${i.middle_name} ${i.surname} ${i.title}`
//       return user
//     })
//   },

//   getVisiblePages: state => {
//     return _.filter(state.pages, page => page.attributes.visible)
//   }
// }

export const actions = {
	async getPageList({
		commit
	}) {
		try {
			let {
				data
			} = await this.$axios.get('api/page')
			console.log(data);
			if (data.code == 200) {
				commit("setPageList", data.store.list)
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	setPageId({
		commit
	}, data) {
		try {
			commit('setPageId', data)
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	async getPage({
		commit
	}, id) {
		try {
			let {
				data
			} = await this.$axios.get(`api/page/${id}`)
			if (data.code == 200) {
				let page = data.store.page
				commit('setPage', page)
				return page
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	async editPage({
		commit
	}, {
		params,
		id
	}) {
		try {
			let {
				data
			} = await this.$axios.post(`api/page/${id}`, params)
			if (data.code == 200) {
				commit('setPage', params)
				return 1
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	}
}
    // getCredits({ commit }) {
    //   try {
    //     let { data } = await this.$axios.get('credits/');
    //     if (data.code == 200) {
    //       commit('setCredits', data.store.list);
    //     }
    //   } catch (error) {
    //     console.log("An error occurred", error);
    //   }
    // },

    // async addCredit({ commit }, params) {
    //   try {
    //     let { data } = await this.$axios.post('credits/', params);
    //     if (data.code == 200) {
    //       commit('setCredits', params);
    //     }
    //   } catch (error) {
    //     console.log("An error occurred", error);
    //   }
    // },

    // async PostInvestigation({commit}, param){
    //   try {
    //     let req = await this.$axios.$post(`page/10`, param.data)
    //     console.log(req)
    //     if (data.code == 200) {
    //       return req.store;
    //     }
    //   } catch (error) {
    //     console.log("an error occured", error)
    //     throw error
    //   }
    // },
