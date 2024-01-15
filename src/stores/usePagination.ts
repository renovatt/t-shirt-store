import type { RootProducts } from "@/@types";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

const DEFAULT_ITEMS = 24;
const DEFAULT_PAGE_SIZE = 0;
const DEFAULT_RELEVANT_FILTER = 'mais relevantes';

export const usePaginationStore = defineStore("usePaginationStore", () => {
  const itemsToShow = ref<number>(DEFAULT_ITEMS)
  const page = ref<number>(DEFAULT_PAGE_SIZE);
  const products = ref<RootProducts[]>([])
  const relevantFilters = ref<string>(DEFAULT_RELEVANT_FILTER)

  const totalProducts = computed(() => products.value.length);
  const totalPages = computed(() => Math.ceil(totalProducts.value / itemsToShow.value));

  const pages = computed(() => {
    const pages = [];
    for (let i = 0; i < totalPages.value; i++) {
      pages.push(i);
    }
    return pages;
  })

  function setPage(newPage: number) {
    page.value = newPage;
  }

  function setRelevantFilters(filter: string) {
    relevantFilters.value = filter;
  }

  function setProducts(newProducts: RootProducts[]) {
    products.value = newProducts;
  }

  function setItemsToShow(newItems: number) {
    itemsToShow.value = newItems;
  }

  function hasNextPage() {
    return (page.value + 1) * itemsToShow.value < totalProducts.value;
  }

  function nextPage() {
    if (hasNextPage()) {
      page.value++;
    }
  }

  function previousPage() {
    if (page.value > 0) {
      page.value--;
    }
  }

  watch(itemsToShow, () => {
    page.value = DEFAULT_PAGE_SIZE;
  })

  watch(totalPages, (newTotalPages) => {
    if (page.value >= newTotalPages) {
      page.value = newTotalPages - 1;
    }
  })

  watch(totalProducts, (newTotalProducts) => {
    if (newTotalProducts === 0) {
      page.value = 0;
    }
  })

  return {
    totalProducts,
    itemsToShow,
    page,
    pages,
    totalPages,
    relevantFilters,
    setItemsToShow,
    nextPage,
    previousPage,
    setProducts,
    setPage,
    setRelevantFilters
  }
});