<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';

const categories = [
  "anime",
  "games",
  "informatica",
  "pets",
  "musica",
  "tecnologia"
]

const store = useCategoriesStore()
</script>

<template>
  <nav class="flex w-full items-center justify-center">
    <ul class="flex w-full items-center justify-between gap-4">
      <li @click="store.setCategory(category)" v-for="category in categories" :key="category"
        class="cursor-pointer rounded-md text-center uppercase hover:opacity-80">
        {{ category }}
      </li>
    </ul>
  </nav>
</template>