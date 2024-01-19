<script setup lang="ts">
import { ref, watch } from 'vue'
import { useImage, type UseImageOptions } from '@vueuse/core'

const props = defineProps({
  src: String,
  alt: String,
});

const imageOptions = ref<UseImageOptions>({ src: props.src || '' });
const { isLoading, error } = useImage(imageOptions.value);

watch(() => props.src, (newSrc) => {
  imageOptions.value.src = newSrc ?? '';
});

</script>

<template>
  <div v-if="isLoading" class="h-full w-full animate-pulse bg-700/10 p-2" />
  <div v-else-if="error" class="flex h-full w-full items-center justify-center text-red-500">
    <span class="text-xs">Erro ao carregar imagen</span>
  </div>
  <img v-else :src="imageOptions.src" class="max-w-full" :alt="props.alt">
</template>