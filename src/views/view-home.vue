<script setup lang="ts">
import ClothCard from '@/components/the-cloth-card.vue';
import Banner from '@/components/the-banner.vue';
import Filters from '@/components/the-filters.vue';
import CollectionBanner from '@/components/the-collection-banner.vue';
import { computed, onMounted, ref } from 'vue';
import db from '../database/products.json'
import type { RootProducts } from '@/@types';
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { useColorsStore } from '@/stores/useColorsStore';
import { useSizesStore } from '@/stores/useSizesStore';

const products = ref<RootProducts[]>([])

const storeCategories = useCategoriesStore()
const storeColors = useColorsStore()
const storeSizes = useSizesStore()

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    let matchesCategory = storeCategories.category !== "Novidades" ? product.tags.includes(storeCategories.category.trim()) : true;
    let matchesColor = storeColors.colors.length > 0 ? storeColors.colors.includes(product.color.slug) : true;
    let matchesSize = storeSizes.sizes.length > 0 ? storeSizes.sizes.includes(product.variation.attribute.slug) : true;

    return matchesCategory && matchesColor && matchesSize;
  });
});

onMounted(() => {
  products.value = db.products as RootProducts[];
})
</script>

<template>
  <section>
    <Banner />
    <CollectionBanner />
    <Filters />
    <article class="flex flex-wrap items-center justify-between gap-2 bg-800 py-2">
      <ClothCard v-for="product in filteredProducts" :key="product.id">
        <template #image>
          <img :src="product.images[0].src" />
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
  </section>
</template>
