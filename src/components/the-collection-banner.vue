<script setup lang="ts">
import { ref } from 'vue';

const category = ref('Novidades')
</script>

<template>
  <section class="flex items-center justify-center border-b border-700/40 p-6">
    <h1 class="text-2xl uppercase text-700/100">{{ category }}</h1>
  </section>
</template>
