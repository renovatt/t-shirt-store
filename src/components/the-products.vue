<script setup lang="ts">
import db from '../database/products.json'
import ClothCard from './the-cloth-card.vue';
import NotFound from './not-found.vue';
import type { RootProducts } from '@/@types';
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { useColorsStore } from '@/stores/useColorsStore';
import { usePagination } from '@/stores/usePagination';
import { useSizesStore } from '@/stores/useSizesStore';
import { ref, computed, onMounted } from 'vue';
import ClothModal from './the-cloth-modal.vue';
import { ShoppingCart, Eye } from 'lucide-vue-next';
import { useCartStore } from '@/stores/useCartStore';

type Item = {
  id: number;
  quantity: number;
  size: string;
  color: string;
}

const item = ref<Item>({} as Item)
const selectedProduct = ref<RootProducts>({} as RootProducts)
const products = ref<RootProducts[]>([])
const view = ref(false)

const storeCategories = useCategoriesStore()
const storeColors = useColorsStore()
const storeSizes = useSizesStore()
const storePagination = usePagination()
const cartStore = useCartStore()

const filteredProducts = computed(() => {
  let filtered = products.value.filter(product => {
    let matchesCategory = storeCategories.category.slug !== "novidades" ? product.tags.includes(storeCategories.category.slug.trim()) : true;
    let matchesColor = storeColors.colors.length > 0 ? storeColors.colors.includes(product.color.slug) : true;
    let matchesSize = storeSizes.sizes.length > 0 ? storeSizes.sizes.includes(product.variation.attribute.slug) : true;

    return matchesCategory && matchesColor && matchesSize;
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
      color: product.color.name
    }
  }
  cartStore.setSelectedProduct(item.value)
}
</script>

<template>
  <article class="flex flex-wrap items-center justify-around gap-2 bg-800 py-2">
    <NotFound v-show="!filteredProducts.length" />
    <ClothModal v-show="view" @close="view = !view" :product="selectedProduct" />
    <ClothCard v-for="product in filteredProducts" :key="product.id">
      <template #image>
        <img :src="product.images[0].src" :alt="product.name" class="max-w-full" />
      </template>
      <template #name>
        {{ product.name }}
      </template>
      <template #price>
        {{ product.price.toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency'
        }) }}
      </template>
      <template #parcel>
        {{ product.payments.creditcard.max_installment.parcel }}
      </template>
      <template #parcel_price>
        {{ product.payments.creditcard.max_installment.parcel_price.toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency'
        }) }}
      </template>
      <template #cart>
        <ShoppingCart class="text-800" @click="addItemToCart(product.id)" />
      </template>
      <template #view>
        <Eye class="text-800" @click="getProduct(product.id)" />
      </template>
    </ClothCard>
  </article>
</template>
