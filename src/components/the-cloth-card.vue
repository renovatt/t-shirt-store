<template>
  <div
    class="flex h-[29.706rem] w-[22.331rem] flex-col items-center justify-around  gap-2 border-2 border-transparent p-2 text-800 hover:border-700/10">
    <figure class="h-[20.456rem] w-[20.456rem]">
      <slot name="image" />
    </figure>

    <span class="flex flex-col items-center justify-center gap-2">
      <h3 class="text-700">
        <slot name="name" />
      </h3>

      <div class="text-700">
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

      <span class="text-700">sem juros</span>
    </span>
  </div>
</template>