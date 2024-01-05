import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorsStore = defineStore("useColorsStore", () => {
  const colors = ref<string[]>([]);

  function setColors(newColors: string[]) {
    colors.value = newColors;
  }

  return {
    setColors,
    colors
  }
})