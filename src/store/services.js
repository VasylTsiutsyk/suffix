import { http } from "@/plugins/http";
import { mutt } from "./blog";

export default {
    namespaced: true,
    state: {
        services: []
    },
    mutations: {
        [mutt.SET_SERVICES](state, services) {
            state.services = services;
        }
    },
    actions: {
        getServices({ commit }) {
            return new Promise((resolve, reject) => {
                http.get("/api/content/tsvv-suffix/services").then(
                    r => {
                        commit(mutt.SET_SERVICES, r.data.items);
                        resolve(r.data);
                    },
                    ({ response }) => {
                        reject(response.data);
                    }
                );
            });
        }
    },
    getters: {
        services(state) {
            return state.services || [];
        }
    }
};