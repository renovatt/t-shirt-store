<script setup lang="ts">
import { Plus, Minus, XCircle, X } from 'lucide-vue-next';
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { filterInputCategories } from '@/utils/mocks/filterInputCategories';
import { filterInputColors } from '@/utils/mocks/filterInputColors';
import { filterInputsizes } from '@/utils/mocks/filterInputsizes';
import { useAsideFilters } from '@/composables/useAsideFilters';
import { useColorsStore } from '@/stores/useColorsStore';
import { useSizesStore } from '@/stores/useSizesStore';
import FadeTransition from './the-fade-transition.vue';

const {
  filterSection,
  selectedColors,
  selectedSizes,
  removeColor,
  removeSize,
  isAccordion,
} = useAsideFilters()

const storeCategories = useCategoriesStore()
const storeColors = useColorsStore()
const storeSizes = useSizesStore()

defineEmits(['close'])

</script>

<template>
  <section class="fixed inset-0 z-10 h-screen w-screen bg-700/50" @click="$emit('close')">
    <aside @click.stop
      class="fixed left-0 top-0 h-screen w-3/4 animate-open overflow-y-auto bg-800 shadow-2xl shadow-700 scrollbar-hide md:w-1/3">
      <section class="sticky top-0 z-20 flex w-full items-center justify-between bg-700 p-4">
        <h1 class="text-base text-800">Filtros</h1>
        <XCircle @click="$emit('close')" class="h-10 w-10 cursor-pointer bg-700 p-2 text-base uppercase text-800" />
      </section>

      <section
        v-show="storeCategories.category.slug !== 'novidades' || storeColors.colors.length > 0 || storeSizes.sizes.length > 0"
        class="my-2 flex w-full flex-col items-start justify-between gap-4 p-2 px-8">
        <h2>Filtros ativos</h2>

        <Transition name="fade">
          <div v-show="storeCategories.category.slug !== 'novidades'"
            class="flex w-full items-center justify-between border border-700/20 p-2">
            <span class="capitalize text-700 opacity-80">{{ storeCategories.category.name }}</span>
            <X class="cursor-pointer" @click="storeCategories.resetCategory" />
          </div>
        </Transition>

        <FadeTransition>
          <div v-for="color in storeColors.colors" :key="color"
            class="flex w-full items-center justify-between border border-700/20 p-2">
            <span class="capitalize text-700 opacity-80">{{ color }}</span>
            <X class="cursor-pointer" @click="removeColor(color)" />
          </div>
        </FadeTransition>

        <FadeTransition>
          <div v-for="size in storeSizes.sizes" :key="size"
            class="flex w-full items-center justify-between border border-700/20 p-2">
            <span class="uppercase text-700 opacity-80">{{ size }}</span>
            <X class="cursor-pointer" @click="removeSize(size)" />
          </div>
        </FadeTransition>
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.category = !filterSection.category">
          <Minus v-if="filterSection.category" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Categorias</h2>
        </span>

        <Transition name="fade">
          <fieldset v-if="filterSection.category" :class="isAccordion('category').value"
            class="ml-6 flex flex-col items-start justify-center">
            <ul class="flex w-full flex-col items-start justify-center">
              <li @click="storeCategories.setCategory(category); $emit('close')" v-for="category in filterInputCategories"
                :key="category.slug" class="cursor-pointer text-700 opacity-80 transition-all hover:opacity-100">
                {{ category.name }}
              </li>
            </ul>
          </fieldset>
        </Transition>
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.color = !filterSection.color">
          <Minus v-if="filterSection.color" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Cores</h2>
        </span>

        <Transition name="fade">
          <fieldset v-if="filterSection.color" :class="isAccordion('color').value"
            class="ml-6 flex flex-col items-start justify-center">
            <label v-for="option in filterInputColors" :key="option.name"
              class="flex cursor-pointer items-center justify-center gap-2" :for="option.name">
              <input :style="{ backgroundColor: option.hexadecimal }" :class="`appearance_reset`"
                class="relative h-5 w-5 cursor-pointer rounded-full border border-700/40 before:rounded-full before:border-700/40 checked:before:border checked:before:bg-800"
                v-model="selectedColors[option.slug]" type="checkbox" :name="option.name" :id="option.name">
              <span class="text-700 opacity-80 transition-all hover:opacity-100">{{ option.name }}</span>
            </label>
          </fieldset>
        </Transition>
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.size = !filterSection.size">
          <Minus v-if="filterSection.size" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Tamanho</h2>
        </span>

        <Transition name="fade">
          <fieldset v-if="filterSection.size" :class="isAccordion('size').value" class="flex flex-wrap gap-1">
            <label :class="selectedSizes[size.slug] ? 'checked' : ''"
              class="relative flex h-10 w-28 items-center justify-center border border-700/20 bg-800 px-4 py-2 hover:bg-700 hover:text-800"
              v-for="size in filterInputsizes" :key="size.slug" :for="size.slug">
              <input v-model="selectedSizes[size.slug]" :class="`appearance_input_reset`"
                class="absolute inset-0 h-full w-full cursor-pointer border border-700/40" type="checkbox"
                :id="size.slug">
              <span>{{ size.name }}</span>
            </label>
          </fieldset>
        </Transition>
      </section>
    </aside>
  </section>
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