<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'remove', 'edit', 'togglePriority'])
const isEditing = ref(false)
const draft = ref(props.todo.text)
const inputRef = ref(null)

function toggleEdit() {
  if (isEditing.value) {
    console.log('Saving...')
    emit('edit', props.todo.id, draft.value)
    isEditing.value = false
  } else {
    isEditing.value = true
  }
}

async function startEdit() {
  draft.value = props.todo.text
  isEditing.value = true
  await nextTick()
  inputRef.value?.focus()
}

// function confirmEdit() {
//   emit('edit', props.todo.id, draft.value)
//   isEditing.value = false
// }

function cancelEdit() {
  isEditing.value = false
}
</script>

<template>
  <li class="flex items-center gap-3 bg-[#1F2937]/50 border border-white/10 rounded-lg px-4 py-3 shadow-sm">
    <input type="checkbox" :checked="todo.completed" @change="emit('toggle', todo.id)"
      class="h-5 w-5 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />

    <input v-if="isEditing" ref="inputRef" v-model="draft" type="text" @keyup.enter="confirmEdit"
      @keyup.esc="cancelEdit" @blur="confirmEdit"
      class="flex-1 rounded border border-indigo-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    <span v-else class="flex-1 cursor-text select-none"
      :class="todo.completed ? 'text-slate-400 line-through' : 'text-[#ADC6FF]'">
      {{ todo.text }}
    </span>

    <button @click="toggleEdit"
      class="shrink-0 rounded p-1 text-slate-400 transition hover:bg-red-50 hover:text-orange-500" aria-label="Hapus">
      {{ isEditing ? '✔️' : '✏️' }}
    </button>

    <button @click="emit('togglePriority', todo.id)" class="material-symbols-outlined shrink-0 rounded p-1 transition"
      aria-label="Prioritas" :class="todo.priority ? 'text-yellow-500' : 'text-slate-400'">
      {{ todo.priority ? 'star' : 'star_outline' }}
    </button>

    <button @click="emit('remove', todo.id)"
      class="shrink-0 rounded p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500" aria-label="Hapus">
      ✕
    </button>
  </li>
</template>
