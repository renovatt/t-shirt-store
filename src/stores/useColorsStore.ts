import { defineStore } from "pinia";
import { ref } from "vue";

export const useColorsStore = defineStore("useColorsStore", () => {
  const colors = ref<string[]>([]);

  function setColors(newColors: string[]) {
    colors.value = newColors;
  }

  function removeColor(color: string) {
    colors.value = colors.value.filter((c) => c !== color);
  }

  function clearColors() {
    colors.value = [];
  }

  return {
    setColors,
    removeColor,
    clearColors,
    colors
  }
})