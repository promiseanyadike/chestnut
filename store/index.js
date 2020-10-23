export const state = () => ({
	billboard: {
		image: "",
		height: "300px",
		left: "",
		right: "",

	},

	hero: {},

	menu: [{
		url: '/',
		label: 'Home'
	},
	{
		url: '/services',
		label: 'Our Services'
	},

	{
		url: '/about',
		label: 'About Us'
	},
	{
		url: '/news',
		label: 'News'
	},

	{
		url: '/contactus',
		label: 'Contact us'
	},
	{
		url: '/gallery',
		label: 'gallery'
	}
	]
})

export const mutations = {
	setBillboard(state, {
		height,
		image,
		left,
		right
	}) {
		state.billboard.height = height
		state.billboard.image = image
		state.billboard.left = left
		state.billboard.right = right

	},

	setHero(state, data) {
		state.hero = data
	}
}

export const actions = {
	async sendEnquiry({
		commit
	}, params) {
		try {
			let {
				data
			} = await this.$axios.post('/api/contact/', params)
			if (data.code == 200) {
				return 1
			}
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	setBillboard({
		commit
	}, params) {
		try {
			commit("setBillboard", params);
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	setHero({
		commit
	}, params) {
		try {
			commit("setHero", params);
			console.log(params)
		} catch (error) {
			console.log("An error occurred", error)
		}
	},

	async Postsubmission({ commit }, param) {
		try {
			let req = await this.$axios.$post(`api/submission`, param.data)
			console.log(req)
			return req.store
		} catch (error) {
			console.log("an error occured", error)
			throw error
		}
	}
}
