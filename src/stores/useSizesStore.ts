import { defineStore } from "pinia";
import { ref } from "vue";

export const useSizesStore = defineStore("useSizesStore", () => {
  const sizes = ref<string[]>([]);

  function setSizes(newSizes: string[]) {
    sizes.value = newSizes;
  }

  function removeSize(size: string) {
    sizes.value = sizes.value.filter((c) => c !== size);
  }

  function clearSizes() {
    sizes.value = [];
  }

  return {
    setSizes,
    removeSize,
    clearSizes,
    sizes
  }
})