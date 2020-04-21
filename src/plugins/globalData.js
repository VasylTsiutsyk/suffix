import store from "@/store";

export const getGlobalData = function() {
    return Promise.all([
        store.dispatch("translations/getAll"),
        store.dispatch("blog/getTags")
    ]);
};