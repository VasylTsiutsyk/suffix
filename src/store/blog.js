import { http } from "@/plugins/http";
import router from "@/router";
import Vue from "vue";

const mutt = {
    SET_HOME_ARTICLES: "SET_HOME_ARTICLES",
    SET_SINGLE_ARCTICLE: "SET_SINGLE_ARCTICLE",
    DEL_SINGLE_ARCTICLE: "DEL_SINGLE_ARCTICLE",
    SET_ARTICLES: "SET_ARTICLES",
    SET_FILT_ARTICLES: "SET_FILT_ARTICLES",
    SET_SERVICES: "SET_SERVICES",
    SET_COLLAPSE: "SET_COLLAPSE",
    SET_CLIENTS: "SET_CLIENTS",
    SET_TAGS: "SET_TAGS",
    SET_LOADED: "SET_LOADED"
};

export { mutt };

export default {
    namespaced: true,
    state: {
        articlesHome: {},
        articles: [],
        filteredArticles: [],
        tags: [],
        singleArticle: null,
        loaded: false
    },
    mutations: {
        [mutt.SET_ARTICLES](state, articles) {
            state.articles = articles;
        },

        [mutt.SET_FILT_ARTICLES](state, articles) {
            state.filteredArticles = articles;
        },

        [mutt.SET_HOME_ARTICLES](state, { tag, data }) {
            Vue.set(state.articlesHome, tag, data);
        },

        [mutt.SET_TAGS](state, tags) {
            state.tags = tags;
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
        getTags({ commit, state }) {
            if (state.tags.length) return Promise.resolve();

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

        getArticles({ commit, state }) {
            if (state.articles.length) return Promise.resolve();

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
                })
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
                            const data = r.data.items[0];
                            if (data) {
                                commit(mutt.SET_SINGLE_ARCTICLE, r.data.items[0].data);
                            } else {
                                router.replace("/404");
                            }
                            resolve(r.data);
                        },
                        ({ response }) => {
                            reject(response.data);
                        }
                    );
            });
        },
        getArticlesByTag({ commit }, tagId) {
            const objectWithSettings = tagId ?
                {
                    params: {
                        $filter: `data/tag/iv eq '${tagId}'`
                    }
                } :
                null;
            return Promise.all([
                new Promise((resolve, reject) => {
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
                })
            ]);
        },

        setArticlesWithTag({ state, commit }) {
            const allRequestForTags = state.tags.map((tag, i) => {
                return new Promise((resolve, reject) => {
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
            return dispatch("setArticlesWithTag");
        }
    },
    getters: {
        tagFirst(state) {
            return state.tags[0] || null;
        },
        tagExceptFirst(state) {
            return state.tags.slice(1) || [];
        },
        getTagById(state) {
            return function(id) {
                return state.tags.find(i => i.id === id);
            };
        },
        articles(state) {
            return state.articles || [];
        },
        articlesCount(state) {
            return state.articles.length;
        },
        firstArticle(state) {
            return state.articles[0] || null;
        },
        exceptFirstArticles(state) {
            return state.articles.slice(1) || [];
        }
    }
};