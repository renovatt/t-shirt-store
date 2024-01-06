<script setup lang="ts">
import { ref } from 'vue';
import AsideFilter from '@/components/the-aside-filters.vue';

const isActiveAsideFilter = ref(false)
</script>

<template>
  <div class="my-2 flex flex-wrap items-center justify-center gap-2 md:justify-start">
    <AsideFilter v-show="isActiveAsideFilter" @close="isActiveAsideFilter = !isActiveAsideFilter" />
    <button @click="isActiveAsideFilter = !isActiveAsideFilter" class="bg-700 p-2 px-4 text-base uppercase text-800">
      Filtrar
    </button>

    <select class="border border-900 p-2 px-4 text-700/80 outline-none">
      <option value="">Mais relevantes</option>
      <option value="">Menor preço</option>
      <option value="">Maior preço</option>
      <option value="">Alfabetica de A>Z</option>
      <option value="">Alfabetica de Z>A</option>
    </select>

    <select class="border border-900 p-2 px-4 text-700/80 outline-none">
      <option value="24">24</option>
      <option value="34">34</option>
      <option value="48">48</option>
    </select>
  </div>
</template>