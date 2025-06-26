import { defineStore } from 'pinia'
import type { Task } from '@/types/Task'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(text: string, dueDate: string) {
      this.tasks.push({ id: Date.now(), text, done: false, dueDate })
    },
    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})
