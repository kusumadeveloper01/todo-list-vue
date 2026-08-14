<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
  todos: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'remove', 'edit', 'togglePriority'])
</script>

<template>
  <ul v-if="todos.length" class="flex flex-col gap-2">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="(id) => emit('toggle', id)"
      @remove="(id) => emit('remove', id)" @togglePriority="(id) => emit('togglePriority', id)"
      @edit="(id, text) => emit('edit', id, text)" />
  </ul>

  <p v-else class="py-10 text-center text-slate-400">
    Nggak ada tugas di sini. Santai dulu 🌤️
  </p>
</template>
