import { defineStore } from 'pinia';
import * as taskService from '../services/taskService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchTasks() {
      this.loading = true;
      this.error = null;
      try {
        const response = await taskService.getTasks();
        this.tasks = response.data;
      } catch (err) {
        this.error = 'Erro ao buscar tarefas.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async addTask(title) {
      this.loading = true;
      this.error = null;
      try {
        const response = await taskService.createTask(title);
        this.tasks.unshift(response.data);
        toast.success('Tarefa criada com sucesso!');
      } catch (err) {
        if (err.response && err.response.data && err.response.data.details) {
          this.error = err.response.data.details[0].message;
        } else {
          this.error = 'Erro ao criar tarefa.';
        }
        toast.error(this.error);
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async toggleTaskComplete(task) {
      this.loading = true;
      this.error = null;
      try {
        const updatedTask = await taskService.updateTask(task.id, {
          completed: !task.completed,
        });

        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask.data;
        }
        toast.success('Tarefa completada com sucesso!');
      } catch (err) {
        this.error = 'Erro ao atualizar tarefa.';
        toast.error(this.error);
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async removeTask(id) {
      this.loading = true;
      this.error = null;
      try {
        await taskService.deleteTask(id);
        this.tasks = this.tasks.filter(t => t.id !== id);
        toast.success('Tarefa removida!');
      } catch (err) {
        this.error = 'Erro ao deletar tarefa.';
        toast.error(this.error);
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
});