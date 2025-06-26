<script setup lang="ts">
import type { Task } from '@/types/Task'
import { defineProps, computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const props = defineProps<{ task: Task }>()
const taskStore = useTaskStore()

const toggle = () => taskStore.toggleTask(props.task.id)
const remove = () => taskStore.deleteTask(props.task.id)

const formattedDueDate = computed(() => {
    const d = new Date(props.task.dueDate)
    return d.toLocaleString()
})
</script>

<template>
    <li :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
        <div class="info" @click="toggle">
            <span>{{ task.text }}</span>
            <small>{{ formattedDueDate }}</small>
        </div>
        <button @click="remove">❌</button>
    </li>
</template>
