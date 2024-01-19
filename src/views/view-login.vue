<script setup lang="ts">
import DefaultHeader from '@/components/the-default-header.vue';
import { usePageTitle } from '@/composables/useTitle';

usePageTitle('Login')

</script>

<template>
  <section class="container flex h-screen flex-col items-center justify-center gap-4 p-2 py-4 ">
    <DefaultHeader />
    <section class="flex h-full w-full items-center justify-center">
      <section
        class="flex w-[26rem] flex-col items-center justify-center gap-4 rounded-lg border border-700/20 px-6 py-10 ">
        <h1 class="text-2xl font-semibold text-700">Faça seu login</h1>

        <label for="login" class="w-full">
          <span class="cursor-pointer text-xs">E-mail</span>
          <input id="login" type="text" placeholder="E-mail"
            class="block w-full rounded-md border-0 p-2.5 pl-4 pr-20 text-700 outline-none ring-1 ring-inset ring-700/20 transition-all placeholder:text-700/20 focus:ring-2 focus:ring-inset focus:ring-600 sm:text-sm sm:leading-6">
        </label>
        <button class="w-full rounded-lg bg-600 p-4 text-xs font-bold uppercase text-800 transition-all hover:opacity-95">
          Continuar
        </button>
        <span class="text-xs">Não tem uma conta? <span class="cursor-pointer hover:underline">Cadastre-se</span></span>
      </section>
    </section>
  </section>
</template>