<script setup lang="ts">
import CategoriesList from './header/categories-list.vue';
import UserDataStore from './header/user-data-store.vue';
import InputSearch from './header/input-search.vue';
import CategoriesListMobile from './header/categories-list-mobile.vue';
import { ref } from 'vue';
import { Menu } from 'lucide-vue-next';

const isOpen = ref(false)
</script>

<template>
  <header
    class="sticky inset-0 z-10 flex w-full flex-col items-center justify-between gap-4 space-y-4 bg-900 p-2 py-4 shadow-2xl shadow-700/10">
    <article class="container flex w-full flex-col items-center justify-between gap-4 bg-900">
      <section class="flex w-full items-center justify-between">
        <div class="flex items-center justify-center gap-4">
          <Menu class="flex h-8 w-8 md:hidden" @click="isOpen = !isOpen" />
          <RouterLink to="/">
            <div class="h-20 w-20 rounded-full bg-700"></div>
          </RouterLink>
        </div>
        <InputSearch />
        <UserDataStore />
      </section>
      <CategoriesListMobile v-show="isOpen" @close="isOpen = !isOpen" />
      <CategoriesList />
    </article>
  </header>
</template>
