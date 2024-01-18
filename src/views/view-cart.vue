<script setup lang="ts">
import CartCheckoutItem from '@/components/the-cart-checkout-item.vue';
import CartCheckout from '@/components/the-cart-checkout.vue';
import { ShoppingCart } from 'lucide-vue-next';
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
        <h5 class="text-base text-700">23 Produtos</h5>
      </header>

      <article class="flex w-full flex-col items-start justify-between gap-4 md:flex-row">
        <section class="w-full space-y-4 overflow-y-auto scrollbar-hide md:w-2/3">
          <CartCheckoutItem>
            <template #image>
              <img src="https://cdn.dooca.store/292/products/camiseta-akira-aberta.jpg?v=1585245966" alt="camiseta-image"
                class="block h-full w-full object-contain">
            </template>

            <template #price-color>
              Off White / G
            </template>

            <template #name>
              Camiseta Cavaleiros Do Apocalipse
            </template>

            <template #remove>
              Remover
            </template>

            <template #quantity>
              x3
            </template>

            <template #total-price>
              R$345,00
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