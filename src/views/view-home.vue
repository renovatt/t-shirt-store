<script setup lang="ts">
import Card from '@/components/the-card.vue';

</script>

<template>
  <div>
    <div class="flex h-60 w-full flex-col items-center justify-center bg-700">
      <span class="text-9xl text-800">BANNERS</span>
      <div class="flex">
        <span class="text-7xl text-800">.</span>
        <span class="text-7xl text-800">.</span>
        <span class="text-7xl text-800">.</span>
        <span class="text-7xl text-800">.</span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 bg-800 py-2">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
