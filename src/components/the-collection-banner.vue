<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';

const store = useCategoriesStore()
</script>

<template>
  <section class="flex items-center justify-center border-b border-700/40 p-4 md:p-6">
    <h1 class="text-xl uppercase text-700/100 md:text-2xl">{{ store.category.name }}</h1>
  </section>
</template>
