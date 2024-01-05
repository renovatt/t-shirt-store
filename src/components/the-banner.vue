<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const banners = [
  "https://cdn.dooca.store/292/files/banner-full-1600x450-camisa10dez-02.jpg?v=1703767653&webp=0",
  "https://cdn.dooca.store/292/files/banner-full-1600x500-born-in3.jpg?v=1695381701&webp=0",
  "https://cdn.dooca.store/292/files/banner-full-1600x450-personalizada-1.png?v=1698060073&webp=0"
]

const modules = [
  Pagination,
  Navigation,
  Autoplay
];
</script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center bg-700">
    <swiper :autoplay="{ delay: 8000, disableOnInteraction: false }" :loop="true" :pagination="true" :modules="modules"
      class="border bg-700 p-2">
      <swiper-slide v-for="img in banners" :key="img">
        <img :src="img" alt="banner-image">
      </swiper-slide>
    </swiper>
  </div>
</template>