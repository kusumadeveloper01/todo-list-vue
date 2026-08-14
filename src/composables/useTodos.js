import { ref, computed, watch } from "vue";

const STORAGE_KEY = "todo-app:items";

/**
 * useTodos
 * Single source of truth for todo state + business logic.
 * Components never mutate todos directly — they call functions
 * this composable exposes. This keeps "what a todo is / how it
 * changes" in one place instead of scattered across components.
 */
export function useTodos() {
  const todos = ref(loadFromStorage());
  const filter = ref("all"); // 'all' | 'active' | 'completed'

  // Persist to localStorage any time the list changes
  watch(
    todos,
    (value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    },
    { deep: true },
  );

  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    todos.value.push({
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
      priority: false,
      createdAt: Date.now(),
    });
  }

  function removeTodo(id) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function toggleTodo(id) {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  function editTodo(id, newText) {
    const trimmed = newText.trim();
    const todo = todos.value.find((t) => t.id === id);
    if (todo && trimmed) todo.text = trimmed;
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.completed);
  }

  function setFilter(value) {
    filter.value = value;
  }

  const filteredTodos = computed(() => {
    if (filter.value === "active")
      return todos.value.filter((t) => !t.completed);
    if (filter.value === "completed")
      return todos.value.filter((t) => t.completed);
    if (filter.value === "priority")
      return todos.value.filter((t) => t.priority);

    return todos.value;
  });

  function togglePriority(id) {
    console.log("togglePriority called with id:", id);
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.priority = !todo.priority;
  }

  const remainingCount = computed(
    () => todos.value.filter((t) => !t.completed).length,
  );

  const hasCompleted = computed(() => todos.value.some((t) => t.completed));

  const progress = computed(() => {
    if (todos.value.length === 0) return 0;

    const completed = todos.value.filter((t) => t.completed).length;

    return Math.round((completed / todos.value.length) * 100);
  });

  const completedCount = computed(
    () => todos.value.filter((t) => t.completed).length,
  );

  return {
    todos,
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
  };
}
