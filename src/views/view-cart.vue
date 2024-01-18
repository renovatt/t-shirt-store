<script setup lang="ts">
import type { CartItem } from '@/@types';
import CartCheckoutItem from '@/components/the-cart-checkout-item.vue';
import CartCheckout from '@/components/the-cart-checkout.vue';
import { useCartStore } from '@/stores/useCartStore';
import { ShoppingCart } from 'lucide-vue-next';
import { computed } from 'vue';

const storeCart = useCartStore()

const formatCartItemTotalAsCurrency = (item: CartItem) => {
  return computed(() => {
    return (item.price * item.quantity).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  })
}

</script>

<template>
  <section class="container flex flex-col items-center justify-start space-y-4 p-2 tracking-normal">
    <header class="w-full rounded-lg border border-700/20 p-4">
      <div class="h-20 w-20 rounded-full bg-700"></div>
    </header>

    <section class="flex w-full flex-col items-center justify-start space-y-4 p-2">
      <header class="flex h-20 w-full items-center justify-between rounded-lg border border-700/20 p-2">
        <div class="flex items-center justify-between gap-4">
          <ShoppingCart class="h-8 w-8 text-700" />
          <h2 class="text-2xl font-bold text-700">Carrinho</h2>
        </div>
        <h5 class="text-base text-700">{{ storeCart.quantity }} Produtos</h5>
      </header>

      <article class="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <section class="w-full space-y-4 overflow-y-auto scrollbar-hide md:w-2/3">
          <CartCheckoutItem v-for="item in storeCart.cart" :key="item.id">
            <template #image>
              <img :src="item.image" :alt="item.name" class="block h-full w-full object-contain">
            </template>

            <template #price-color>
              {{ item.color }} / {{ item.size }}
            </template>

            <template #name>
              {{ item.name }}
            </template>

            <template #remove>
              <span @click="storeCart.removeItem(item.id)">Remover</span>
            </template>

            <template #quantity>
              x{{ item.quantity }}
            </template>

            <template #total-price>
              {{ formatCartItemTotalAsCurrency(item).value }}
            </template>
          </CartCheckoutItem>
        </section>

        <section class="w-full rounded-lg bg-700/5 p-6 md:w-96">
          <CartCheckout />
        </section>
      </article>
    </section>
  </section>
</template>