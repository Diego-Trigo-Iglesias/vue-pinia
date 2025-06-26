<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const text = ref('')
const dueDate = ref('')
const taskStore = useTaskStore()

function handleAdd() {
    if (text.value.trim() && dueDate.value) {
        taskStore.addTask(text.value, dueDate.value)
        text.value = ''
        dueDate.value = ''
    }
}
</script>

<template>
    <form @submit.prevent="handleAdd">
        <div class="form-group">
            <input v-model="text" placeholder="Nueva tarea" required />
        </div>
        <div class="form-group">
            <input type="datetime-local" v-model="dueDate" required />
        </div>
        <button type="submit">Añadir</button>
    </form>
</template>



<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

input {
    padding: 0.5rem;
    font-size: 1rem;
}

button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
}
</style>
