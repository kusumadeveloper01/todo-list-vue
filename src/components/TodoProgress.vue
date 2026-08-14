<script setup>
defineProps({
    progress: {
        type: Number,
        required: true,
    },
    completedCount: {
        type: Number,
        required: true,
    },
    todos: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="mb-4 p-5 flex flex-col gap-2 font-jakarta bg-[#1F2937]/50 border border-white/10 rounded-lg">
        <div class="mb-1 flex justify-between text-sm">
            <span class="font-medium text-[#ADC6FF]">Progress Misi</span>

            <span class="text-[#CBC3D7]">{{ progress }}%</span>
        </div>

        <div class="h-3 overflow-hidden rounded-full bg-[#0A0538]">
            <div class="h-full rounded-full bg-indigo-500 transition-all duration-300"
                :style="{ width: `${progress}%` }">
            </div>
        </div>

        <small class="text-[#CBC3D7] text-right font-medium">
            {{ completedCount }} / {{ todos.length }} Misi Selesai
        </small>
    </div>

</template>