<script setup lang="ts">
import ClothCard from './the-cloth-card.vue';
import NotFound from './not-found.vue';
import ClothModal from './the-cloth-modal.vue';
import { ShoppingCart, Eye } from 'lucide-vue-next';
import { useFilters } from '@/composables/useFilters';
import FadeTransition from './the-fade-transition.vue';

const {
  view,
  selectedProduct,
  filteredProducts,
  addItemToCart,
  getProduct,
} = useFilters()

</script>

<template>
  <article class="flex flex-wrap items-center justify-around gap-2 bg-800 py-2">
    <NotFound v-show="!filteredProducts.length" />
    <ClothModal v-show="view" @close="view = !view" :product="selectedProduct" />
    <FadeTransition>
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
    </FadeTransition>
  </article>
</template>
