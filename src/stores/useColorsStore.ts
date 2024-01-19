import { defineStore } from "pinia";

export const useColorsStore = defineStore("useColorsStore", {
  state: () => ({
    colors: [] as string[]
  }),
  actions: {
    setColors(newColors: string[]) {
      this.colors = newColors;
    },
    removeColor(color: string) {
      this.colors = this.colors.filter((c) => c !== color);
    },
    clearColors() {
      this.colors = [];
    }
  }
});