<template>
  <article class="relative mt-4 flex w-full items-center justify-start gap-4 space-x-2 rounded">
    <figure class="h-16 w-16">
      <slot name="image" />
    </figure>

    <section class="flex w-40 flex-col items-start justify-center space-y-2">
      <h6 class="flex w-32 items-start justify-start truncate text-[0.875rem] font-bold text-700">
        <slot name="name" />
      </h6>

      <span class="flex items-start justify-center gap-4">
        <h6 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
          <slot name="price" />
        </h6>

        <span class="flex items-center justify-start text-[0.875rem] font-bold text-700">X</span>

        <h6 class="flex items-center justify-start text-[0.875rem] font-bold text-700">
          <slot name="quantity" />
        </h6>
      </span>
    </section>

    <slot name="close-icon" />
  </article>
</template>

