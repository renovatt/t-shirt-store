import { defineStore } from "pinia";

const DEFAULT_CATEGORY = {
  name: 'Novidades',
  slug: 'novidades'
}

export const useCategoriesStore = defineStore("useCategoryStore", {
  state: () => ({
    category: DEFAULT_CATEGORY,
    categories: [] as string[]
  }),
  actions: {
    setCategory(newCategory: { name: string; slug: string }) {
      this.category = newCategory;
    },
    setCategories(newCategories: string[]) {
      this.categories = newCategories;
    },
    resetCategory() {
      this.category = DEFAULT_CATEGORY;
    },
  }
});