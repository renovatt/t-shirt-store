<script setup lang="ts">
import Banner from '@/components/the-banner.vue';
import Filters from '@/components/the-filters.vue';
import CollectionBanner from '@/components/the-collection-banner.vue';
import Products from '@/components/the-products.vue';
import Header from '@/components/the-header.vue';
import Footer from '@/components/the-footer.vue';
</script>

<template>
  <section>
    <Header />
    <Banner />
    <article class="container">
      <CollectionBanner />
      <Filters />
      <Products />
    </article>
    <Footer />
  </section>
</template>
