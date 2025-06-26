<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from './TaskItem.vue'
import type { Task } from '@/types/Task'

const taskStore = useTaskStore()

const sortedTasks = computed<Task[]>(() =>
    [...taskStore.tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
)
</script>

<template>
    <ul class="task-list">
        <TaskItem v-for="task in sortedTasks" :key="task.id" :task="task" />
        <li v-if="sortedTasks.length === 0" class="empty">No hay tareas pendientes.</li>
    </ul>
</template>

<style scoped>
.task-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.empty {
    text-align: center;
    color: #777;
    font-style: italic;
    margin-top: 1rem;
}
</style>
