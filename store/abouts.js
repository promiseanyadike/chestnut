export const state = () => ({
    aboutPages: {}
})

export const mutations = {


    setaboutpage(state, data) {
        state.aboutPages = data
    }
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
    }

}
