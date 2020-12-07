var bcrypt = require("bcryptjs");
import { saveSession, getSession, removeSession } from "@/utils/auth";

export const state = () => ({
    // admin: null,
    isAuthenticated: getSession("isAuthenticated") || "",
    admin: getSession("admin") || {}
});

export const mutations = {
    saveUser(state, data) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("$isAuthenticated$", salt);
        state.isAuthenticated = hash;
        // saveSession("isAuthenticated", hash);
        saveSession("isAuthenticated", hash);
    },
    logout() {
        removeSession("isAuthenticated");
    }
};

export const getters = {
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

export const actions = {
    async logout() {
        try {
            let req = await this.$axios.$get(`api/user/logout`);
            console.log(req)
            if (req.code == 200) {
                removeSession("isAuthenticated");
                return { status: true };
            }
            // return { status: false };
        } catch (error) {
            console.log("error");
            throw error;
        }
    },

    async login({ commit }, data) {
        try {
            let req = await this.$axios.$post("api/user/login", data);
            console.log(req)
            if (req.code == 200) {
                commit("saveUser", req.store.user, { root: true })
                return 200;
            } else if (req.code == 404) {
                return 404
            }
            // return { status: false };
        } catch (error) {
            console.log("error");
            throw error;
        }
    }
}
