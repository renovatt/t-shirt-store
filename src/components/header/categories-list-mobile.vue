<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { TendenciesCategories } from '@/utils/mocks/filterInputCategories';
import { XCircle } from 'lucide-vue-next';

const store = useCategoriesStore()
defineEmits(['close'])

</script>

<template>
  <section @click="$emit('close')" class="fixed inset-0 z-10 flex h-screen w-screen bg-700/50 md:hidden">
    <aside @click.stop
      class="fixed left-0 top-0 h-screen w-3/4 animate-open overflow-y-auto bg-900 shadow-2xl shadow-700 scrollbar-hide">
      <section class="sticky top-0 flex w-full items-center justify-end bg-900 p-4">
        <XCircle @click="$emit('close')" class="h-10 w-10 cursor-pointer p-2 text-base uppercase text-700" />
      </section>

      <nav class="flex w-full items-center justify-center">
        <ul class="flex w-full flex-col items-start justify-between gap-4 p-4">
          <li @click="store.setCategory(category); $emit('close')" v-for="category in TendenciesCategories"
            :key="category.slug" class="cursor-pointer rounded-md text-center uppercase hover:opacity-80">
            {{ category.name }}
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>