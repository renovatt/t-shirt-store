<script setup lang="ts">
import { ShoppingBag, CircleUserRound, Search } from 'lucide-vue-next';
</script>

<template>
  <section class="relative flex gap-5 px-6">
    <Search class="flex h-8 w-8 md:hidden" />
    <CircleUserRound class="h-8 w-8" />
    <ShoppingBag class="h-8 w-8" />
    <span
      class="absolute right-0 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-700 text-xs text-800">6</span>
  </section>
</template>