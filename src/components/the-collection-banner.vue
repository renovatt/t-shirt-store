<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';

const store = useCategoriesStore()
</script>

<template>
  <section class="flex items-center justify-center border-b border-700/40 p-6">
    <h1 class="text-2xl uppercase text-700/100">{{ store.category }}</h1>
  </section>
</template>
