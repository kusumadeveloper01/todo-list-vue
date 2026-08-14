<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const options = [
  { value: 'all', label: 'Semua' },
  { value: 'active', label: 'Belum Selesai' },
  { value: 'completed', label: 'Selesai' },
  { value: 'priority', label: 'Prioritas' }
]
</script>

<template>
  <div class="flex gap-2 w-full text-nowrap overflow-auto">
    <button v-for="opt in options" :key="opt.value" @click="emit('update:modelValue', opt.value)"
      class="flex-1 border border-[#958EA0]/30 text-[#CBC3D7] font-jakarta rounded-3xl px-2 py-1.5 text-sm font-semibold transition"
      :class="modelValue === opt.value
        ? 'bg-[#A078FF] text-[#340080]'
        : 'text-[#CBC3D7] hover:text-[#ADC6FF]'
        ">
      {{ opt.label }}
    </button>
  </div>
</template>
