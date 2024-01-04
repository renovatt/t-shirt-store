<script setup lang="ts">
import ClothCard from '@/components/the-cloth-card.vue';
import Banner from '@/components/the-banner.vue';
import Filters from '@/components/the-filters.vue';
import { onMounted, ref } from 'vue';
import db from '../database/products.json'
import type { RootProducts } from '@/@types';

const products = ref<RootProducts[]>([])

onMounted(() => {
  products.value = db.products as RootProducts[];
  console.log(products.value)
})
</script>

<template>
  <section>
    <Banner />
    <Filters />
    <article class="flex flex-wrap items-center justify-between gap-2 bg-800 py-2">
      <ClothCard v-for="product in products" :key="product.id">
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
