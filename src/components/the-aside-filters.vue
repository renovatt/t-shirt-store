<script setup lang="ts">
import { Plus, Minus, XCircle } from 'lucide-vue-next';
import { computed, reactive, watch } from 'vue';

interface FilterSection {
  color: boolean;
  size: boolean;
  category: boolean;
  [key: string]: boolean;
}

interface SelectedCategories {
  [key: string]: boolean;
}

interface SelectedSizes {
  [key: string]: boolean;
}

interface SelectColors {
  [key: string]: boolean;
}

const filterInputCategories = [
  "anime-manga",
  "games",
  "informatica",
  "pets",
  "rock-musicas",
  "tecnologia"
]

const filterInputColors = [
  {
    color: '#e1e0da',
    name: 'Mescla Banana'
  },
  {
    color: '#000958',
    name: 'Azul Marinho'
  },
  {
    color: '#2585b1',
    name: 'Azul Genuino'
  },
  {
    color: '#bcbcbc',
    name: 'Mescla Cinza'
  },
  {
    color: '#000000',
    name: 'Preto'
  },
  {
    color: '#fff',
    name: 'Off White'
  },
]

const filterInputsizes = ['2P', 'P', 'M', 'G', '2G', '3G', '4G',]

const filterSection: FilterSection = reactive({
  color: true,
  size: true,
  category: true,
})

const selectedCategories: SelectedCategories = reactive({})
const selectedColors: SelectColors = reactive({})
const selectedSizes: SelectedSizes = reactive({})

const toggleCategory = (category: string) => {
  selectedCategories[category] = !selectedCategories[category]
}

const toggleColor = (color: string) => {
  selectedColors[color] = !selectedColors[color]
}

const toggledSize = (size: string) => {
  selectedSizes[size] = !selectedSizes[size]
}

const selectedCategoriesArray = computed(() => {
  return Object.keys(selectedCategories).filter(category => selectedCategories[category])
})

const selectedColorsArray = computed(() => {
  return Object.keys(selectedColors).filter(color => selectedColors[color])
})

const selectedSizesArray = computed(() => {
  return Object.keys(selectedSizes).filter(size => selectedSizes[size])
})

watch(selectedCategories, (value) => {
  console.log(selectedCategoriesArray.value)
})

watch(selectedColors, (value) => {
  console.log(selectedColorsArray.value)
})

watch(selectedSizes, (value) => {
  console.log(selectedSizesArray.value)
})

const isAccordion = (section: string) => computed(() => filterSection[section] ? 'flex' : 'hidden');

defineEmits(['close'])
</script>

<template>
  <section class="fixed inset-0 z-10 h-screen w-screen bg-700/50">
    <aside
      class="fixed left-0 top-0 h-screen w-[31.5rem] animate-open overflow-y-auto bg-800 shadow-2xl shadow-700 scrollbar-hide">
      <section class="sticky top-0 flex w-full items-center justify-between bg-700 p-4">
        <h1 class="text-base text-800">Filtros</h1>
        <XCircle @click="$emit('close')" class="h-10 w-10 cursor-pointer bg-700 p-2 text-base uppercase text-800" />
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.category = !filterSection.category">
          <Minus v-if="filterSection.category" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Categorias</h2>
        </span>

        <fieldset :class="isAccordion('category').value" class="ml-6 flex flex-col items-start justify-center">
          <ul class="flex w-full flex-col items-start justify-center">
            <li @click="toggleCategory(category)" v-for="category in filterInputCategories" :key="category"
              class="cursor-pointer capitalize transition-all hover:opacity-80">
              {{ category }}
            </li>
          </ul>
        </fieldset>
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.color = !filterSection.color">
          <Minus v-if="filterSection.color" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Cores</h2>
        </span>

        <fieldset :class="isAccordion('color').value" class="ml-6 flex flex-col items-start justify-center">
          <label v-for="option in filterInputColors" :key="option.name"
            class="flex cursor-pointer items-center justify-center gap-2" :for="option.name">
            <input :style="{ backgroundColor: option.color }" :class="`appearance_reset`"
              class="relative h-5 w-5 cursor-pointer rounded-full border border-700/40 before:rounded-full before:border-700/40 checked:before:border checked:before:bg-800"
              @change="toggleColor(option.name)" type="checkbox" :name="option.name" :id="option.name">
            <span>{{ option.name }}</span>
          </label>
        </fieldset>
      </section>

      <section class="flex flex-col items-start justify-center border-b border-700/10 p-2">
        <span class="my-2 flex h-10 w-full cursor-pointer items-center justify-start gap-1"
          @click="filterSection.size = !filterSection.size">
          <Minus v-if="filterSection.size" class="h-5 w-5" />
          <Plus v-else class="h-5 w-5" />
          <h2>Tamanho</h2>
        </span>

        <fieldset :class="isAccordion('size').value" class="flex flex-wrap gap-1">
          <label :class="selectedSizes[size] ? 'checked' : ''"
            class="relative flex h-10 w-28 items-center justify-center border border-700/20 bg-800 px-4 py-2 hover:bg-700 hover:text-800"
            v-for="size in filterInputsizes" :key="size" :for="size">
            <input @change="toggledSize(size)" :class="`appearance_input_reset`"
              class="absolute inset-0 h-full w-full cursor-pointer border border-700/40" type="checkbox" :id="size"
              :value="size">
            <span>{{ size }}</span>
          </label>
        </fieldset>
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