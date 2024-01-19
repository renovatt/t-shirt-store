<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import CartItem from './the-cart-item.vue';
import { useCartStore } from '@/stores/useCartStore';
import FadeTransition from './the-fade-transition.vue';
import ImageSkeleton from './the-image-skeleton.vue';

defineEmits(['close'])

const storeCart = useCartStore()

</script>

<template>
  <section
    class="absolute right-0 top-10 z-50 flex w-[17.875rem] animate-open flex-col items-center justify-between gap-4 rounded-lg bg-800 p-2 px-4 shadow-2xl shadow-700/40 md:min-h-96 md:w-[19.75rem]"
    @mouseleave="$emit('close')">
    <section v-if="storeCart.cart.length > 0"
      class="flex max-h-60 flex-col items-center justify-start space-y-6 overflow-y-auto scrollbar-hide md:max-h-[26rem]">
      <FadeTransition>
        <CartItem v-for="item in storeCart.cart" :key="item.id">
          <template #image>
            <ImageSkeleton :src="item.image" :alt="item.name" class="block h-full w-full object-contain" />
          </template>

          <template #name>
            {{ item.name }}
          </template>

          <template #price>
            {{ item.price.toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            }) }}
          </template>

          <template #quantity>
            {{ item.quantity }}
          </template>

          <template #close-icon>
            <Trash2 @click="storeCart.removeItem(item.id)"
              class="absolute right-0 top-3 h-5 w-5 cursor-pointer opacity-70 md:top-1" />
          </template>
        </CartItem>
      </FadeTransition>
    </section>

    <div v-else class="my-20">Sem itens no carrinho</div>

    <section class="mb-5 flex w-full flex-col items-center justify-center gap-4">
      <div class="flex w-full items-center justify-between">
        <h2 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
          Subtotal
        </h2>

        <span class="flex items-center justify-start text-[0.875rem] font-bold text-700">{{
          storeCart.total.toLocaleString('pt-BR',
            {
              currency: 'BRL',
              style: 'currency'
            }) }}
        </span>
      </div>

      <div class="flex w-full items-center justify-between">
        <RouterLink to="/cart" class="bg-700 p-2 px-4 text-base uppercase text-800">
          carrinho
        </RouterLink>

        <RouterLink to="/login" class="bg-700 p-2 px-4 text-base uppercase text-800">
          Checkout
        </RouterLink>
      </div>
    </section>
  </section>
</template>
