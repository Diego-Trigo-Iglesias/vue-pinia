<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
</script>

<template>
    <div class="container">
        <h1>📝 Lista de Tareas</h1>
        <TaskForm />
        <TaskList />
    </div>
</template>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    font-family: sans-serif;
}
</style>
