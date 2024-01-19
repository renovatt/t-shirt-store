<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { ShoppingBag, CircleUserRound, Search } from 'lucide-vue-next';
import CartDropdown from '../the-cart-dropdown.vue';
import InputSearchModal from './input-search.modal.vue';

const storeCart = useCartStore()
const openCart = ref(false)
const openSearchInput = ref(false)

</script>

<template>
  <section class="relative flex gap-5 px-6">
    <Search class="flex h-8 w-8 md:hidden" @click="openSearchInput = !openSearchInput" />
    <InputSearchModal v-show="openSearchInput" @close="openSearchInput = !openSearchInput" />
    <RouterLink to="/login">
      <CircleUserRound class="h-8 w-8" />
    </RouterLink>
    <ShoppingBag @click="openCart = !openCart" class="h-8 w-8 cursor-pointer" />
    <CartDropdown v-show="openCart" @close="openCart = !openCart" />
    <span
      class="absolute -right-2 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-700 pl-[.15rem] text-xs text-800 md:-right-4">{{
        storeCart.quantity }}
    </span>
  </section>
</template>