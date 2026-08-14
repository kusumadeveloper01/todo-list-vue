<script setup>
import { useTodos } from './composables/useTodos'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilters from './components/TodoFilters.vue'
import TodoStats from './components/TodoStats.vue'
import TodoProgress from './components/TodoProgress.vue'

const {
  filter,
  filteredTodos,
  remainingCount,
  hasCompleted,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearCompleted,
  setFilter,
  togglePriority,
  progress,
  completedCount,
} = useTodos()
</script>

<template>
  <div class="h-full xl:min-h-screen bg-[#0F172A] px-4 pb-14">
    <div class="mx-auto flex w-full max-w-lg flex-col gap-5">
      <header class="bg-[#0F0B3C]/80 py-3 px-5">
        <h1 class="text-2xl font-bold text-[#ADC6FF] font-pixelify">Daily Quest</h1>
      </header>

      <p class="text-[#ADC6FF] text-center font-jakarta">Level Up Your Day</p>

      <TodoInput @add="addTodo" />

      <TodoFilters :model-value="filter" @update:model-value="setFilter" />

      <TodoProgress :todos="filteredTodos" :progress="progress" :completed-count="completedCount" />

      <TodoList :todos="filteredTodos" @toggle="toggleTodo" @remove="removeTodo" @edit="editTodo"
        @togglePriority="togglePriority" />

      <TodoStats :remaining-count="remainingCount" :has-completed="hasCompleted" @clear-completed="clearCompleted" />
    </div>
  </div>
</template>
