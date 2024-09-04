import { defineStore } from "pinia";
export const useUiStore = defineStore({
    id: "ui",
    state: () => ({
        isLoading: false,
    }),
    actions: {
        setLoading(value) {
            console.log("Setting loading to", value);
            this.isLoading = value;
        },
    },
})