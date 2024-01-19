<script setup lang="ts">
import { X, Search } from 'lucide-vue-next';
import InputSearch from './input-search.vue';

defineEmits(['close'])

</script>

<template>
  <section @click="$emit('close')" class="fixed inset-0 z-10 flex h-screen w-screen bg-700/50 md:hidden">
    <aside @click.stop
      class="fixed left-0 top-0 h-60 w-full animate-openDown overflow-y-auto bg-800 shadow-2xl shadow-700/40">
      <div class="flex items-center justify-between p-4">
        <h3 class="text-base text-700">Buscar por produtos</h3>
        <X @click="$emit('close')" class="h-10 w-10 cursor-pointer  p-2 text-base uppercase text-700" />
      </div>
      <div class="flex items-center justify-between bg-900 px-4">
        <Search class="h-8 w-8" />
        <InputSearch />
      </div>
    </aside>
  </section>
</template>