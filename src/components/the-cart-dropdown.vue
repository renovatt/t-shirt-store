<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import CartItem from './the-cart-item.vue';

defineEmits(['close'])
</script>

<template>
  <section
    class="absolute right-0 top-10 z-50 flex w-[17.875rem] animate-open flex-col items-center justify-between gap-4 rounded-lg bg-800 p-2 px-4 shadow-2xl shadow-700/40 md:min-h-96 md:w-[19.75rem]"
    @mouseleave="$emit('close')">
    <section
      class="flex max-h-60 flex-col items-center justify-start space-y-6 overflow-y-auto scrollbar-hide md:max-h-[26rem]">
      <CartItem>
        <template #name>
          Camiseta Yu Yu Hakusho
        </template>

        <template #price>
          R$79.90
        </template>

        <template #close-icon>
          <Trash2 class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
        </template>
      </CartItem>

      <CartItem>
        <template #name>
          Camiseta Yu Yu Hakusho
        </template>

        <template #price>
          R$79.90
        </template>

        <template #close-icon>
          <Trash2 class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
        </template>
      </CartItem>

      <CartItem>
        <template #name>
          Camiseta Yu Yu Hakusho
        </template>

        <template #price>
          R$79.90
        </template>

        <template #close-icon>
          <Trash2 class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
        </template>
      </CartItem>

      <CartItem>
        <template #name>
          Camiseta Yu Yu Hakusho
        </template>

        <template #price>
          R$79.90
        </template>

        <template #close-icon>
          <Trash2 class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
        </template>
      </CartItem>

      <CartItem>
        <template #name>
          Camiseta Yu Yu Hakusho
        </template>

        <template #price>
          R$79.90
        </template>

        <template #close-icon>
          <Trash2 class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
        </template>
      </CartItem>
    </section>

    <section class="mb-5 flex w-full flex-col items-center justify-center gap-4">
      <div class="flex w-full items-center justify-between">
        <h2 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
          Subtotal
        </h2>

        <span class="flex items-center justify-start text-[0.875rem] font-bold text-700">R$79.90</span>
      </div>

      <div class="flex w-full items-center justify-between">
        <button class="bg-700 p-2 px-4 text-base uppercase text-800">
          carrinho
        </button>

        <button class="bg-700 p-2 px-4 text-base uppercase text-800">
          Checkout
        </button>
      </div>
    </section>
  </section>
</template>
