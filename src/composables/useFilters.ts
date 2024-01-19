import type { RootProducts } from "@/@types"
import { useCartStore } from "@/stores/useCartStore"
import { useCategoriesStore } from "@/stores/useCategoriesStore"
import { useColorsStore } from "@/stores/useColorsStore"
import { usePaginationStore } from "@/stores/usePagination"
import { useSizesStore } from "@/stores/useSizesStore"
import { ref, computed, onMounted, watch } from "vue"
import { useItem } from "./useItem"
import db from "../database/products.json"
import { useSearchStore } from "@/stores/useSearch"

export const useFilters = () => {
  const selectedProduct = ref<RootProducts>({} as RootProducts)
  const products = ref<RootProducts[]>([])
  const view = ref(false)

  const { item } = useItem()

  const storeCart = useCartStore()
  const storeSizes = useSizesStore()
  const storeColors = useColorsStore()
  const storePagination = usePaginationStore()
  const storeCategories = useCategoriesStore()
  const storeSearch = useSearchStore()

  const filteredProducts = computed(() => {
    let filtered = products.value.filter(product => {
      const matchesCategory = storeCategories.category.slug !== "novidades" ? product.tags.includes(storeCategories.category.slug.trim()) : true;
      const matchesColor = storeColors.colors.length > 0 ? storeColors.colors.includes(product.color.slug) : true;
      const matchesSize = storeSizes.sizes.length > 0 ? storeSizes.sizes.includes(product.variation.attribute.slug) : true;
      const matchesSearch = storeSearch.value.trim() !== '' ? product.tags.toLowerCase().includes(storeSearch.value.toLowerCase())
        : true;

      return matchesCategory && matchesColor && matchesSize && matchesSearch;
    });

    if (storePagination.relevantFilters === 'a>z') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (storePagination.relevantFilters === 'z>a') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    storePagination.setProducts(filtered);

    return filtered.slice(
      storePagination.page * storePagination.itemsToShow,
      (storePagination.page + 1) * storePagination.itemsToShow);
  });

  watch(() => storeSearch.value, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal.trim() !== '') {
      storeCategories.resetCategory();
    }
  });

  watch(() => storeCategories.category, (newVal, oldVal) => {
    if (newVal !== oldVal && newVal.slug !== 'novidades') {
      storeSearch.resetValue();
    }
  });

  onMounted(() => {
    products.value = db.products as RootProducts[];
  })

  const getProduct = (id: number) => {
    const product = products.value.find(product => product.id === id);
    if (product) {
      selectedProduct.value = product;
      view.value = !view.value;
    }
  }

  const addItemToCart = (id: number) => {
    const product = products.value.find(product => product.id === id);
    if (product) {
      item.value = {
        id: product.id,
        quantity: 1,
        size: product.variation.attribute.name,
        color: product.color.name,
        price: product.price,
        name: product.name,
        image: product.images[0].src
      }
      storeCart.setSelectedProduct(item.value)
    }
  }

  return {
    view,
    selectedProduct,
    filteredProducts,
    addItemToCart,
    getProduct
  }
}