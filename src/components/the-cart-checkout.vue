<script setup lang="ts">

</script>

<template>
  <section class="flex w-full flex-col items-start justify-center gap-4 space-y-0">
    <h2 class="text-base font-bold text-700">Resumo</h2>

    <div class="flex w-full items-center justify-between">
      <h2 class="text-base text-700">Total</h2>
      <span class="text-base text-700">R$ 400,00</span>
    </div>

    <div class="flex w-full items-center justify-between">
      <h2 class="text-base text-700">Cupom de desconto</h2>
      <span class="cursor-pointer text-xs font-bold text-700/70 hover:underline">Inserir cupom</span>
    </div>

    <div class="flex w-full items-center justify-between">
      <h2 class="text-base text-700">Frete</h2>
      <span class="text-xs font-bold text-700/70">Grátis</span>
    </div>

    <div class="flex w-full items-start justify-between">
      <h2 class="text-base font-bold text-700">Total</h2>

      <div class="flex w-full flex-col items-end justify-center">
        <span class="text-xl font-bold text-700">R$ 400,00</span>
        <span class="text-xs">à vista com 3% OFF</span>
        <span class="text-xs font-bold text-600">ou 5x R$ 48,23 sem juros</span>
      </div>
    </div>

    <div class="flex w-full flex-col items-center justify-center gap-2 space-y-2">
      <button
        class="w-full rounded-lg bg-600 p-4 text-xs font-bold uppercase text-800 transition-all hover:opacity-95">Finalizar
        a compra</button>
      <RouterLink class="text-xs font-bold text-700 opacity-80 transition-all hover:underline" to="/">Continuar
        comprando
      </RouterLink>
    </div>
  </section>
</template>