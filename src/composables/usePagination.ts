import { usePaginationStore } from "@/stores/usePagination"
import { ref, watch, onMounted } from "vue"

const DEFAULT_RELEVANT_FILTER = 'mais relevantes';
const QUANTITY_ITEMS = '24';
const PAGES = '1';

export const usePagination = () => {
  const isActiveAsideFilter = ref(false)
  const relevantFilters = ref(DEFAULT_RELEVANT_FILTER)
  const quantityItems = ref(QUANTITY_ITEMS)
  const pages = ref(PAGES)

  const store = usePaginationStore()

  watch(() => store.page, (newPage) => {
    pages.value = String(newPage)
  })

  watch(quantityItems, (newSelected) => {
    store.setItemsToShow(Number(newSelected))
  })

  watch(relevantFilters, (newSelected) => {
    store.setRelevantFilters(newSelected)
  })

  onMounted(() => {
    pages.value = String(store.page)
  })

  return {
    isActiveAsideFilter,
    relevantFilters,
    quantityItems,
    pages,
  }
}