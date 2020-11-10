export const state = () => ({
  servicePages: {},
  areaPage: []
})


export const mutations = {


  setservicepage(state, data) {
    state.areaPage = data
  }
}

export const actions = {

  async getServicePage({ commit }) {

    try {
      let req = await this.$axios.$get(`api/area`)
      if (req.code == 200) {
        let page = req.store.list;
        console.log(page)
        commit('setservicepage', page);
        return page
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  },

  async getPracticeArea({
    commit
  }, id) {
    try {
      let {
        data
      } = await this.$axios.get(`/api/area/${id}`)
      if (data.code == 200) {
        let practice = data.store.Service
        commit("setservicepage", practice)
      }
    } catch (error) {
      console.log("An error occured", error)
    }
  },

}
