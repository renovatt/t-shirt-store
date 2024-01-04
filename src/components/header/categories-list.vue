<script setup lang="ts">
import { ref } from 'vue';

const categories = [
  "anime-manga",
  "games",
  "informatica",
  "pets",
  "rock-musicas",
  "tecnologia"
]

const selectedcategory = ref('')

const setCategory = (category: string) => {
  selectedcategory.value = category
  console.log(selectedcategory.value)
}
</script>

<template>
  <nav class="flex w-full items-center justify-center">
    <ul class="flex w-full items-center justify-between gap-4">
      <li @click="setCategory(category)" v-for="category in categories" :key="category"
        class="cursor-pointer rounded-md text-center uppercase hover:opacity-80">
        {{ category }}
      </li>
    </ul>
  </nav>
</template>