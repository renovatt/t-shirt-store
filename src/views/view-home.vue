<script setup lang="ts">
import Banner from '@/components/the-banner.vue';
import Filters from '@/components/the-filters.vue';
import CollectionBanner from '@/components/the-collection-banner.vue';
import Products from '@/components/the-products.vue';
</script>

<template>
  <section>
    <Banner />
    <article class="container">
      <CollectionBanner />
      <Filters />
      <Products />
    </article>
  </section>
</template>
