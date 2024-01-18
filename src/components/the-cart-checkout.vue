<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import { computed } from 'vue';

const storeCart = useCartStore()

const formatFifthAsCurrency = (value: number) => {
  return computed(() => {
    return (value / 5).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  })
}

</script>

<template>
  <section class="flex w-full flex-col items-start justify-center gap-4 space-y-0">
    <h2 class="text-base font-bold text-700">Resumo</h2>

    <div class="flex w-full items-center justify-between">
      <h2 class="text-base text-700">Subtotal</h2>
      <span class="text-base text-700">
        {{ storeCart.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }) }}
      </span>
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
        <span class="text-xl font-bold text-700">
          {{ storeCart.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }) }}
        </span>
        <span class="text-xs">à vista com 3% OFF</span>
        <span class="text-xs font-bold text-600">ou 5x {{ formatFifthAsCurrency(storeCart.total).value }} sem juros</span>
      </div>
    </div>

    <div class="flex w-full flex-col items-center justify-center gap-2 space-y-2">
      <RouterLink to="/login"
        class="w-full rounded-lg bg-600 p-4 text-center text-xs font-bold uppercase text-800 transition-all hover:opacity-95">
        Finalizar
        a compra</RouterLink>
      <RouterLink class="text-xs font-bold text-700 opacity-80 transition-all hover:underline" to="/">Continuar
        comprando
      </RouterLink>
    </div>
  </section>
</template>