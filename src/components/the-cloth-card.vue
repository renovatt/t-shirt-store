<script setup lang="ts">
import { Eye, ShoppingCart } from 'lucide-vue-next';

</script>

<template>
  <div
    class="group relative flex w-40 flex-col items-center justify-around gap-2 border-2 border-transparent p-2 transition-all ease-in-out hover:border-700/10 md:h-[29.706rem] md:w-[22.331rem]">
    <figure class="md:h-[20.456rem] md:w-[20.456rem]">
      <slot name="image" />
    </figure>

    <div
      class="absolute bottom-24 flex w-full items-center justify-center gap-6 opacity-0 transition-all delay-150 duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 md:bottom-40">

      <span class="cursor-pointer rounded-full bg-700/90 p-2 transition-all hover:bg-700">
        <ShoppingCart class="text-800" />
      </span>

      <span class="cursor-pointer rounded-full bg-700/90 p-2 transition-all hover:bg-700">
        <Eye class="text-800" />
      </span>
    </div>

    <span class="flex flex-col flex-wrap items-center justify-center gap-2">
      <h3 class="text-center text-xs text-700 md:text-base">
        <slot name="name" />
      </h3>

      <div class="text-center text-xs text-700 md:text-base">
        <span class="font-bold">
          <slot name="price" />
        </span> em até
        <span class="font-bold">
          <slot name="parcel" />x
        </span> de
        <span class="font-bold">
          <slot name="parcel_price" />
        </span>
      </div>

      <span class="text-center text-xs text-700 md:text-base">sem juros</span>
    </span>
  </div>
</template>