<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';

const TendenciesCategories = [
  {
    name: 'Anime e Mangá',
    slug: 'anime',
  },
  {
    name: 'Games',
    slug: 'games',
  },
  {
    name: 'Informática',
    slug: 'informatica',
  },
  {
    name: 'Pets',
    slug: 'pets',
  },
  {
    name: 'Música',
    slug: 'musica',
  },
  {
    name: 'Tecnologia',
    slug: 'tecnologia',
  }
]

const store = useCategoriesStore()
</script>

<template>
  <nav class="hidden w-full items-center justify-center md:flex">
    <ul class="flex w-full items-center justify-between gap-4">
      <li @click="store.setCategory(category)" v-for="category in TendenciesCategories" :key="category.slug"
        class="cursor-pointer rounded-md text-center uppercase hover:opacity-80">
        {{ category.name }}
      </li>
    </ul>
  </nav>
</template>