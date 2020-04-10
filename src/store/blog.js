import { http } from "@/plugins/http";
import Vue from "vue";

const mutt = {
    SET_HOME_ARTICLES: "SET_HOME_ARTICLES",
    SET_SINGLE_ARCTICLE: "SET_SINGLE_ARCTICLE",
    DEL_SINGLE_ARCTICLE: "DEL_SINGLE_ARCTICLE",
    SET_ARTICLES: "SET_ARTICLES",
    SET_SERVICES: "SET_SERVICES",
    SET_COLLAPSE: "SET_COLLAPSE",
    SET_TAGS: "SET_TAGS",
    SET_LOADED: "SET_LOADED"
};

export { mutt };

export default {
    namespaced: true,
    state: {
        articlesHome: {},
        articles: [],
        tags: [],
        services: [],
        collapseItems: [],
        singleArticle: null,
        loaded: false
    },
    mutations: {
        [mutt.SET_ARTICLES](state, articles) {
            state.articles = articles;
        },

        [mutt.SET_HOME_ARTICLES](state, { tag, data }) {
            Vue.set(state.articlesHome, tag, data);
        },

        [mutt.SET_TAGS](state, tags) {
            state.tags = tags;
        },
        [mutt.SET_COLLAPSE](state, collapseItems) {
            state.collapseItems = collapseItems;
        },
        [mutt.SET_SERVICES](state, services) {
            state.services = services;
        },
        [mutt.SET_LOADED](state) {
            state.loaded = true;
        },
        [mutt.DEL_SINGLE_ARCTICLE](state) {
            state.singleArticle = null;
        },
        [mutt.SET_SINGLE_ARCTICLE](state, value) {
            state.singleArticle = value;
        }
    },
    actions: {
        getTags({ commit }) {
            return new Promise((resolve, reject) => {
                http.get("/api/content/tsvv-suffix/categories").then(
                    r => {
                        commit(mutt.SET_TAGS, r.data.items);
                        resolve(r.data);
                    },
                    ({ response }) => {
                        reject(response.data);
                    }
                );
            });
        },
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
        },
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
        },
        getArticles({ commit, state, dispatch }) {
            if (state.loaded) return;
            commit(mutt.SET_LOADED);
            return Promise.all([
                new Promise((resolve, reject) => {
                    http.get("/api/content/tsvv-suffix/articles").then(
                        r => {
                            commit(mutt.SET_ARTICLES, r.data.items);
                            resolve(r.data);
                        },
                        ({ response }) => {
                            reject(response.data);
                        }
                    );
                }),
                dispatch("getTags")
            ]);
        },
        getArticleBySlug({ commit }, slug) {
            return new Promise((resolve, reject) => {
                http
                    .get("/api/content/tsvv-suffix/articles", {
                        params: {
                            $filter: `data/slug/iv eq '${slug}'`
                        }
                    })
                    .then(
                        r => {
                            commit(
                                mutt.SET_SINGLE_ARCTICLE,
                                r.data.items[0] ? r.data.items[0].data : null
                            );
                            resolve(r.data);
                        },
                        ({ response }) => {
                            reject(response.data);
                        }
                    );
            });
        },
        getArticlesByTag({ commit, dispatch }, tagId) {
            const objectWithSettings = tagId ?
                {
                    params: {
                        $filter: `data/title/iv eq '${tagId}'`
                    }
                } :
                null;
            return Promise.all([
                (new Promise((resolve, reject) => {
                        http
                            .get("/api/content/tsvv-suffix/articles", objectWithSettings)
                            .then(
                                r => {
                                    commit(mutt.SET_FILT_ARTICLES, r.data.items);
                                    resolve(r.data);
                                },
                                ({ response }) => {
                                    reject(response.data);
                                }
                            );
                    }),
                    dispatch("getTags"))
            ]);
        },
        setArticlesWithTag({ state, commit }) {
            const allRequestForTags = state.tags.map((tag, i) => {
                return new Promise((resolve, reject) => {
                    console.log(tag);

                    const objectWithSettings = {
                        params: {
                            $filter: `data/tag/iv eq '${tag.id}'`,
                            $top: !i ? 4 : 3
                        }
                    };
                    http
                        .get("/api/content/tsvv-suffix/articles", objectWithSettings)
                        .then(
                            r => {
                                commit(mutt.SET_HOME_ARTICLES, {
                                    data: r.data.items,
                                    tag: tag.data.title
                                });
                                resolve();
                            },
                            ({ response }) => {
                                reject(response.data);
                            }
                        );
                });
            });

            return Promise.all(allRequestForTags);
        },
        getArticlesForHome({ dispatch }) {
            return dispatch("getTags").then(() => {
                return dispatch("setArticlesWithTag");
            });
        }
    },
    getters: {
        tagFirst(state) {
            return state.tags[0] || null;
        },
        tagExceptFirst(state) {
            return state.tags.splice(1) || [];
        },
        getTagById(state) {
            return function(id) {
                return state.tags.find(i => i.id === id);
            };
        },
        articlesCount(state) {
            return state.articles.length;
        },
        firstArticle(state) {
            return state.articles[0] || null;
        },
        exceptFirstArticles(state) {
            return state.articles.splice(1) || [];
        },
        collapseItems(state) {
            return state.collapseItems || [];
        },
        services(state) {
            return state.services || [];
        }
    }
};