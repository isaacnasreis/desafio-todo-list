<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        class="h-16 w-16 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"
      ></div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
