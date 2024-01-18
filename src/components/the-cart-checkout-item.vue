<template>
  <section class="flex w-full flex-col items-center justify-center gap-4 rounded-lg border border-700/20 p-2 ">
    <article class="flex w-full items-center justify-between gap-4 p-2">
      <figure class="h-16 w-16">
        <slot name="image" />
      </figure>

      <section class="flex h-full w-full flex-col items-start justify-center space-y-2">
        <h2 class="text-base font-bold text-700">
          <slot name="name" />
        </h2>
        <span class="text-xs font-bold text-700">
          <slot name="price-color" />
        </span>
      </section>

      <span class="flex h-full flex-col items-end justify-between gap-6">
        <span class="cursor-pointer text-xs hover:underline">
          <slot name="remove" />
        </span>

        <div class="flex items-center justify-center gap-2">
          <span class="text-base font-bold text-700">
            <slot name="quantity" />
          </span>
          <span class="text-base font-bold text-700">
            <slot name="total-price" />
          </span>
        </div>
      </span>
    </article>
  </section>
</template>
