<script setup lang="ts">
import CategoriesList from './header/categories-list.vue';
import UserDataStore from './header/user-data-store.vue';
import InputSearch from './header/input-search.vue';
</script>

<template>
  <header
    class="sticky inset-0 z-10 flex w-full flex-col items-center justify-between gap-4 space-y-4 bg-900 p-2 py-4 shadow-2xl shadow-700/10">
    <section class="flex w-full items-center justify-between">
      <RouterLink to="/">
        <div class="h-20 w-20 rounded-full bg-700"></div>
      </RouterLink>
      <InputSearch />
      <UserDataStore />
    </section>
    <CategoriesList />
  </header>
</template>
