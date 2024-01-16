<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { ShoppingBag, CircleUserRound, Search } from 'lucide-vue-next';
import CartDropdown from '../the-cart-dropdown.vue';

const cartStore = useCartStore()
const openCart = ref(false)

</script>

<template>
  <section class="relative flex gap-5 px-6">
    <Search class="flex h-8 w-8 md:hidden" />
    <CircleUserRound class="h-8 w-8" />
    <ShoppingBag @mouseenter="openCart = !openCart" @click="openCart = !openCart" class="h-8 w-8 cursor-pointer" />
    <CartDropdown v-show="openCart" @close="openCart = !openCart" />
    <span
      class="absolute right-0 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-700 text-xs text-800">{{
        cartStore.quantity }}
    </span>
  </section>
</template>