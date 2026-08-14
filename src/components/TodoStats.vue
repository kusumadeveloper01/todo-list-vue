<script setup>
defineProps({
  remainingCount: {
    type: Number,
    required: true,
  },
  hasCompleted: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['clear-completed'])
</script>

<template>
  <div class="flex items-center justify-between text-sm text-slate-500">
    <span>{{ remainingCount }} tugas tersisa</span>
    <button
      v-if="hasCompleted"
      @click="emit('clear-completed')"
      class="font-medium text-indigo-600 hover:underline"
    >
      Hapus yang selesai
    </button>
  </div>
</template>
