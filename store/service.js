export const state = () => ({
	practices: [],
	practice: {}
})

export const mutations = {
	setPracticeAreas(state, data) {
		let newData = data;
		let x = _.find(data, f => f.id === 0);
		if (!_.isNull(x)) {
			newData.splice(newData.indexOf(x), 1);
			state.practices = newData
		} else {
			state.practices = data
		}
	},

	deletePractice(state, id) {
		let practice = _.find(state.practices, {
			id
		})
		state.practices.splice(state.practices.indexOf(practice), 1)
	},

	addPracticeArea(state, data) {
		state.practices.push(data)
	},

	setPractice(state, data) {
		state.practice = data
	}
}

export const actions = {
	async getPracticeAreas({
		commit
	}) {
		try {
			let {
				data
			} = await this.$axios.get('api/area')
			if (data.code == 200) {
				let list = data.store.list
				commit('setPracticeAreas', list)
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	async getPracticeArea({
		commit
	}, id) {
		try {
			let {
				data
			} = await this.$axios.get(`api/area/${id}`)
			if (data.code == 200) {
				let practice = data.store.Service
				commit("setPractice", practice)
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	},

	async createPracticeArea({
		commit
	}, params) {
		try {
			let {
				data
			} = await this.$axios.post('api/area', params)
			if (data.code == 200) {
				commit('addPracticeArea', params)
				return 1
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	},

	async deletePractice({
		commit
	}, id) {
		try {
			let {
				data
			} = await this.$axios.delete(`api/area/${id}`)
			if (data.code == 200) {
				commit('deletePractice', id)
				return 1
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	},

	async editPractice({
		commit
	}, {
		params,
		id
	}) {
		try {
			let {
				data
			} = await this.$axios.post(`api/area/${id}`, params)
			if (data.code == 200) {
				commit('setPractice', params)
				return 1
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	}
}
