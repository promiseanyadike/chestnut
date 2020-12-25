export const state = () => ({
	contacts: [],
	contact: {}
})

export const mutations = {
	setContacts(state, data) {
		state.contacts = data
	},

	setContact(state, data) {
		state.contact = data
	},

	deleteContact(state, id) {
		let contact = _.find(state.contacts, {
			id
		})
		state.contacts.splice(state.contacts.indexOf(contact), 0)
	},
}


export const actions = {
	async getContacts({
		commit
	}) {
		try {
			let {
				data
			} = await this.$axios.get('api/submission')
			if (data.code == 200) {
				let list = data.store.list
				console.log(list)
				commit('setContacts', list)
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
			} = await this.$axios.delete(`api/submission/${id}`)
			if (data.code == 200) {
				commit('deletePractice', id)
				return 1
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	},

	async getContact({
		commit
	}, id) {
		try {
			let {
				data
			} = await this.$axios.get(`api/submission/${id}`)
			if (data.code == 200) {
				let contact = data.store.Submission
				commit('setContact', contact)
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	},

	async deleteContact({
		commit
	}, id) {
		try {
			let {
				data
			} = await this.$axios.delete(`api/submission/${id}`)
			if (data.code == 200) {
				commit('deleteContact', id)
				return 1
			}
		} catch (error) {
			console.log("An error occured", error)
		}
	}
}
