<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import AsideFilter from '@/components/the-aside-filters.vue';
import { usePagination } from '@/stores/usePagination';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const isActiveAsideFilter = ref(false)
const selected = ref('24')
const pages = ref('1')

const store = usePagination()

watch(() => store.page, (newPage) => {
  pages.value = String(newPage)
})

watch(selected, (newSelected) => {
  store.setItemsToShow(Number(newSelected))
})

onMounted(() => {
  pages.value = String(store.page)
})
</script>

<template>
  <section class="my-2 flex flex-wrap items-center justify-center gap-2 md:justify-between">
    <AsideFilter v-show="isActiveAsideFilter" @close="isActiveAsideFilter = !isActiveAsideFilter" />
    <aside class="flex flex-wrap items-center justify-center gap-2">
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

      <select v-model="selected" class="border border-900 p-2 px-4 text-700/80 outline-none">
        <option value="24" selected>24</option>
        <option value="34">34</option>
        <option value="48">48</option>
      </select>
    </aside>

    <aside class="hidden items-center justify-center gap-4 md:flex">
      <span class="text-700/80">Página:
        <select v-model="pages" @change="store.setPage(Number(pages))"
          class="border border-900 p-2 text-700/80 outline-none">
          <option v-for="page in store.pages" :key="page" :value="page">{{ page + 1 }}</option>
        </select> de {{ store.totalPages }}
      </span>
      <ChevronLeft @click="store.previousPage" class="h-5 w-5 cursor-pointer text-700/80" />
      <ChevronRight @click="store.nextPage" class="h-5 w-5 cursor-pointer text-700/80" />
    </aside>
  </section>
</template>