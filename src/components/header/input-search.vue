<script setup lang="ts">
import { ref, watch } from 'vue';

const search = ref('')
const emits = defineEmits(['coth-tags'])

watch(search, (newValue) => {
  emits('coth-tags', newValue)
  console.log(search.value)
})
</script>

<template>
  <input v-model="search" type="search" placeholder="Olá, o que você procura?"
    class="hidden w-80 p-2 px-4 outline-none md:flex lg:w-[40rem]">
</template>
