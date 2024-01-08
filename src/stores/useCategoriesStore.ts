import { defineStore } from "pinia";
import { ref } from "vue";

const DEFAULT_CATEGORY = {
  name: 'Novidades',
  slug: 'novidades'
}

type Category = {
  name: string;
  slug: string;
}

export const useCategoriesStore = defineStore("useCategoryStore", () => {
  const category = ref<Category>(DEFAULT_CATEGORY);
  const categories = ref<string[]>([]);

  function setCategory(newCategory: { name: string; slug: string}) {
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