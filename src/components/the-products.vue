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

const products = ref<RootProducts[]>([])

const storeCategories = useCategoriesStore()
const storeColors = useColorsStore()
const storeSizes = useSizesStore()
const storePagination = usePagination()

const filteredProducts = computed(() => {
  let filtered = products.value.filter(product => {
    let matchesCategory = storeCategories.category !== "Novidades" ? product.tags.includes(storeCategories.category.trim()) : true;
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
</script>

<template>
  <article class="flex flex-wrap items-center justify-around gap-2 bg-800 py-2">
    <NotFound v-show="!filteredProducts.length" />
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
    </ClothCard>
  </article>
</template>
