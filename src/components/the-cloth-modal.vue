<script setup lang="ts">
import type { RootProducts } from '@/@types';
import { Plus, Minus } from 'lucide-vue-next';
import { computed, toRefs } from 'vue';

const filterInputsizes = [
  {
    name: '2P',
    slug: '2p',
  },
  {
    name: 'P',
    slug: 'p',
  },
  {
    name: 'M',
    slug: 'm',
  },
  {
    name: 'G',
    slug: 'g',
  },
  {
    name: '2G',
    slug: '2g',
  },
  {
    name: '3G',
    slug: '3g',
  },
  {
    name: '4G',
    slug: '4g',
  },
]

defineEmits(['close'])

const props = defineProps<{ product: RootProducts }>()
const { product } = toRefs(props);

const productImageSrcOne = computed(() => product.value?.images?.[0]?.src);
const productImageSrcSecond = computed(() => product.value?.images?.[1]?.src);
const productImageSrcThird = computed(() => product.value?.images?.[2]?.src);

const getId = (id: number) => {
  console.log(id)
}

</script>

<template>
  <div class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-700/20 p-5">
    <div class="relative flex h-[95%] w-[95%] max-w-7xl animate-zoom items-center justify-center bg-800 p-2">

      <button @click="$emit('close')" class="absolute right-1 top-1 z-10 h-10 w-10 bg-700 text-800">X</button>

      <article
        class="relative flex h-full w-full  flex-col items-center justify-start gap-6 overflow-y-auto p-2 md:flex-row md:justify-center">

        <section
          class="relative flex w-full flex-col items-center justify-center gap-6 md:h-full md:w-1/2 md:flex-row-reverse">
          <figure class="flex h-full w-full items-center justify-center p-0 md:p-2">
            <img v-if="productImageSrcOne" :src="productImageSrcOne" :alt="product.name" class="block md:max-w-full" />
          </figure>

          <div class="flex w-full items-center justify-around gap-2 md:w-auto md:flex-col md:justify-center md:gap-10">
            <figure class="flex h-20 w-20 items-center justify-center border  border-700/20 p-1">
              <img v-if="productImageSrcOne" :src="productImageSrcOne" :alt="product.name" class="block md:max-w-full" />
            </figure>

            <figure class="flex h-20 w-20 items-center justify-center border  border-700/20 p-1">
              <img v-if="productImageSrcSecond" :src="productImageSrcSecond" :alt="product.name"
                class="block md:max-w-full" />
            </figure>

            <figure class="flex h-20 w-20 items-center justify-center border  border-700/20 p-1">
              <img v-if="productImageSrcThird" :src="productImageSrcThird" :alt="product.name"
                class="block md:max-w-full" />
            </figure>
          </div>
        </section>

        <section class="flex h-full w-full flex-col items-start justify-between gap-2 md:w-2/5 md:py-4">
          <article class="flex h-full w-full flex-col items-start justify-between space-y-6">

            <div class="flex flex-col items-start justify-center gap-4">
              <h3 class="text-xl font-bold uppercase text-700/70">{{ product.name }}</h3>
              <p class="text-xs font-bold text-700/70">#EVITE TROCA, CONFIRA A NOSSA TABELA DE MEDIDAS ANTES DE
                ESCOLHER O TAMANHO
                DA CAMISETA#</p>
            </div>

            <div class="flex flex-col gap-1">
              <h3 class="text-base text-700/70">Tamanho</h3>

              <fieldset class="flex flex-wrap gap-1">
                <label
                  class="relative flex h-10 w-10 items-center justify-center border border-700/20 bg-800 p-2 hover:bg-700 hover:text-800"
                  v-for="size in filterInputsizes" :key="size.slug" :for="size.slug">
                  <input :class="`appearance_input_reset`"
                    class="absolute inset-0 h-full w-full cursor-pointer border border-700/40" type="checkbox"
                    :id="size.slug">
                  <span>{{ size.name }}</span>
                </label>
              </fieldset>
            </div>

            <div class="flex flex-col gap-1">
              <h3 class="text-base text-700/70">Cor</h3>
              <span v-if="product.color" class="bg-700 p-2 px-4 text-center text-base uppercase text-800">{{
                product.color.name }}</span>
            </div>

            <div class="flex flex-col items-start justify-center">
              <span class="text-xl font-bold text-700/70">R$ 79,90</span>
              <span class="text-base text-700/70">em até 2x de R$ 39,95 sem juros</span>
            </div>

            <div class="flex w-full flex-col items-start justify-between gap-6">
              <div class="flex items-center justify-center gap-4 border border-900 p-2 text-700/80 outline-none">
                <Minus class="h-3 w-3 cursor-pointer" />
                <span>6</span>
                <Plus class="h-3 w-3 cursor-pointer" />
              </div>
              <button class="w-full bg-700 p-4 text-base uppercase text-800" @click="getId(product.id)">Adicionar</button>
            </div>

          </article>
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
.appearance_reset {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::before {
    content: '';
    position: absolute;
    inset: 4px;
  }
}

.appearance_input_reset {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.checked {
  color: white;
  background-color: #1e1f20;
}
</style>