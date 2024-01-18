<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { ShoppingBag, CircleUserRound, Search } from 'lucide-vue-next';
import CartDropdown from '../the-cart-dropdown.vue';

const storeCart = useCartStore()
const openCart = ref(false)

</script>

<template>
  <section class="relative flex gap-5 px-6">
    <Search class="flex h-8 w-8 md:hidden" />
    <RouterLink to="/login">
      <CircleUserRound class="h-8 w-8" />
    </RouterLink>
    <ShoppingBag @mouseenter="openCart = !openCart" @click="openCart = !openCart" class="h-8 w-8 cursor-pointer" />
    <CartDropdown v-show="openCart" @close="openCart = !openCart" />
    <span
      class="absolute -right-4 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-700 pl-[.15rem] text-xs text-800">{{
        storeCart.quantity }}
    </span>
  </section>
</template>