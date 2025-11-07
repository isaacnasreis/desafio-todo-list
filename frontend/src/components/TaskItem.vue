<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggleComplete", "deleteTask"]);
</script>

<template>
  <li class="flex items-center justify-between p-4 border-b border-gray-200">
    <div class="flex items-center">
      <button
        @click="emit('toggleComplete', task)"
        :class="[
          'w-6 h-6 rounded-full border-2 mr-4 transition-all duration-200',
          task.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-400 hover:border-green-500',
        ]"
      >
        <svg
          v-if="task.completed"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="white"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </button>

      <span
        :class="[
          'text-lg',
          task.completed ? 'text-gray-400 line-through' : 'text-gray-700',
        ]"
      >
        {{ task.title }}
      </span>
    </div>

    <button
      @click="emit('deleteTask', task.id)"
      class="text-gray-400 hover:text-red-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.496 0c.342.052.682.107 1.022.166m11.474 0a48.108 48.108 0 00-3.478-.397m-7.996 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166"
        />
      </svg>
    </button>
  </li>
</template>
