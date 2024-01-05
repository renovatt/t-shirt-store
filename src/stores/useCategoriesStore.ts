import { defineStore } from "pinia";
import { ref } from "vue";

const DEFAULT_CATEGORY = 'Novidades';

export const useCategoriesStore = defineStore("useCategoryStore", () => {
  const category = ref<string>(DEFAULT_CATEGORY);
  const categories = ref<string[]>([]);

  function setCategory(newCategory: string) {
    category.value = newCategory;
  }

  function setCategories(newCategories: string[]) {
    categories.value = newCategories;
  }

  function resetCategory() {
    category.value = DEFAULT_CATEGORY;
  }

  return {
    setCategory,
    setCategories,
    resetCategory,
    category,
    categories
  }
})