import { mapGetters } from "vuex";

export const mixin = {
    methods: {
        _getTag(categories) {
            if (!this.getTagById) throw new Error("NOT_FOUND_METHOD");

            const result = this.getTagById(categories[0]);
            if (!result) return "";

            return result.data.title;
        }
    },
    computed: {
        ...mapGetters("blog", {
            getTagById: "getTagById"
        })
    }
};