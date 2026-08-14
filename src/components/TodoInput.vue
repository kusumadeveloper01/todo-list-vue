<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])

const text = ref('')

function submit() {
  if (!text.value.trim()) return
  emit('add', text.value)
  text.value = ''
}
</script>

<template>
  <form @submit.prevent="submit"
    class="flex flex-col md:flex-row gap-2 p-5 font-jakarta bg-[#1F2937]/50 border border-white/10 rounded-lg">
    <input v-model="text" type="text" placeholder="Mau ngerjain apa?"
      class="flex-1 rounded-lg border border-white/10 bg-[#181445] px-4 py-2.5 text-[#CBC3D7] placeholder:text-[#CBC3D7] focus:outline-none focus:ring-2 focus:ring-indigo-500" />

    <button type="submit"
      class="btn-primary-gradient text-white font-label-bold text-label-bold px-6 py-3 rounded-lg whitespace-nowrap flex items-center justify-center gap-2">
      <span class="material-symbols-outlined text-sm">add_task</span>
      Terima Quest
    </button>
  </form>
</template>

<style scoped>
.btn-primary-gradient {
  background: linear-gradient(135deg, #a078ff 0%, #0566d9 100%);
  box-shadow: 0 0 15px rgba(160, 120, 255, 0.4);
  transition: all 0.3s ease;
}

.btn-primary-gradient:hover {
  box-shadow: 0 0 25px rgba(160, 120, 255, 0.7);
  transform: translateY(-1px);
}
</style>
