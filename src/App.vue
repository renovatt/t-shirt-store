<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCartStore } from './stores/useCartStore';
import { onMounted } from 'vue';

const store = useCartStore();

onMounted(() => {
  store.getCartInLocalStorage();
});

</script>

<template>
  <RouterView />
</template>

