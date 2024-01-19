import { defineStore } from "pinia";

export const useSizesStore = defineStore("useSizesStore", {
  state: () => ({
    sizes: [] as string[]
  }),
  actions: {
    setSizes(newSizes: string[]) {
      this.sizes = newSizes;
    },
    removeSize(size: string) {
      this.sizes = this.sizes.filter((s) => s !== size);
    },
    clearSizes() {
      this.sizes = [];
    }
  }
});