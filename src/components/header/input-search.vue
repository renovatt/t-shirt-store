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
    class="w-full bg-900 p-2 py-4 outline-none placeholder:text-700/80 md:bg-800 md:py-2 lg:w-[40rem]">
</template>
