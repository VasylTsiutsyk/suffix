import { http } from "@/plugins/http";
import { mutt } from "./blog";

export default {
    namespaced: true,
    state: {
        clients: []
    },
    mutations: {
        [mutt.SET_CLIENTS](state, clients) {
            state.clients = clients;
        }
    },
    actions: {
        getClients({ state, commit }) {
            if (state.clients.length) return Promise.resolve();
            return new Promise((resolve, reject) => {
                http.get("/api/content/tsvv-suffix/clients").then(
                    r => {
                        commit(mutt.SET_CLIENTS, r.data.items);
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
        clients(state) {
            return state.clients || [];
        }
    }
};