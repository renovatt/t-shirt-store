<template>
  <TransitionGroup name="fade">
    <slot />
  </TransitionGroup>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>