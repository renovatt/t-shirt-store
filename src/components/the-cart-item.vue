<template>
  <article class="relative mt-4 flex w-full items-center justify-start gap-4 space-x-2 rounded">
    <figure class="h-16 w-16">
      <img src="https://cdn.dooca.store/292/products/camiseta-yu-yu-hakusho-aberta.jpg?v=1585164688" alt="image-product"
        class="block h-full w-full object-contain" />
    </figure>

    <div class="flex w-40 flex-col items-start justify-center">
      <h6 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
        <slot name="name" />
      </h6>
      <h6 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
        <slot name="price" />
      </h6>
    </div>

    <slot name="close-icon" />
  </article>
</template>

