# To Do List — Vue 3 Composition API

## Jalanin

```bash
npm install
npm run dev
```

## Struktur

```
src/
├── composables/
│   └── useTodos.js       # state + business logic (single source of truth)
├── components/
│   ├── TodoInput.vue     # input field, emit('add', text)
│   ├── TodoItem.vue      # 1 baris todo, punya state edit lokal
│   ├── TodoList.vue      # render list, terusin event dari TodoItem
│   ├── TodoFilters.vue   # tab all/active/completed
│   └── TodoStats.vue     # sisa tugas + clear completed
└── App.vue                # orkestrator: manggil useTodos(), wiring antar komponen
```

Lihat penjelasan lengkap arsitekturnya di percakapan Claude.
