import { defineStore } from "pinia";
import { ref } from "vue";

export const useSizesStore = defineStore("useSizesStore", () => {
  const sizes = ref<string[]>([]);

  function setSizes(newSizes: string[]) {
    sizes.value = newSizes;
  }

  return {
    setSizes,
    sizes
  }
})