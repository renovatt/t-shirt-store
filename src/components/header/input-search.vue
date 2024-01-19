<script setup lang="ts">
import { useSearchStore } from '@/stores/useSearch';
import { ref, watch } from 'vue';

const search = ref('')
const storeSearch = useSearchStore()

watch(search, (newValue) => {
  storeSearch.setValue(newValue)
})
</script>

<template>
  <input v-model="search" type="search" placeholder="Olá, o que você procura?"
    class="hidden w-80 p-2 px-4 outline-none md:flex lg:w-[40rem]">
</template>
