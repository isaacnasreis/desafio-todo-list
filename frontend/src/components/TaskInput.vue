<script setup>
import { ref } from "vue";

const emit = defineEmits(["addTask"]);

const newTaskTitle = ref("");

const submitTask = () => {
  if (newTaskTitle.value.trim()) {
    emit("addTask", newTaskTitle.value);
    newTaskTitle.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="submitTask" class="flex gap-3">
    <input
      v-model="newTaskTitle"
      type="text"
      placeholder="Adicionar nova tarefa..."
      class="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Adicionar
    </button>
  </form>
</template>
