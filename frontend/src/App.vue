<script setup>
import { onMounted } from "vue";
import { useTaskStore } from "./stores/taskStore";
import TaskInput from "./components/TaskInput.vue";
import TaskItem from "./components/TaskItem.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import EmptyState from "./components/EmptyState.vue";

const store = useTaskStore();

onMounted(() => {
  store.fetchTasks();
});

const handleAddTask = (title) => {
  if (title.trim()) {
    store.addTask(title);
  }
};

const handleToggle = (task) => {
  store.toggleTaskComplete(task);
};

const handleDelete = (id) => {
  store.removeTask(id);
};
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="max-w-xl mx-auto py-12 px-6">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Minha Lista de Tarefas
      </h1>

      <TaskInput @addTask="handleAddTask" />

      <LoadingOverlay :isLoading="store.loading" />

      <div
        v-if="store.tasks.length > 0"
        class="bg-white rounded-lg shadow-lg mt-6"
      >
        <ul>
          <TaskItem
            v-for="task in store.tasks"
            :key="task.id"
            :task="task"
            @toggleComplete="handleToggle"
            @deleteTask="handleDelete"
          />
        </ul>
      </div>

      <EmptyState v-else-if="!store.loading && store.tasks.length === 0" />
    </div>
  </div>
</template>

<style scoped></style>
