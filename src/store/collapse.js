import { http } from "@/plugins/http";
import { mutt } from "./blog";

export default {
    namespaced: true,
    state: {
        collapseItems: []
    },
    mutations: {
        [mutt.SET_COLLAPSE](state, collapseItems) {
            state.collapseItems = collapseItems;
        }
    },
    actions: {
        getCollapse({ commit }) {
            return new Promise((resolve, reject) => {
                http.get("/api/content/tsvv-suffix/collapse").then(
                    r => {
                        commit(mutt.SET_COLLAPSE, r.data.items);
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
        collapseItems(state) {
            return state.collapseItems || [];
        }
    }
};