<template>
  <div
    class="flex w-40 flex-col items-center justify-around gap-2 border-2 border-transparent p-2 text-800 hover:border-700/10 md:h-[29.706rem] md:w-[22.331rem]">
    <figure class="md:h-[20.456rem] md:w-[20.456rem]">
      <slot name="image" />
    </figure>

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