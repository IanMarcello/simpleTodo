<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">To Do List</h3>
      </div>
      <ul role="list" class="space-y-3">
        <li
          v-for="todo in toDoStore.tasks"
          :key="todo.id"
          class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
        >
          <p class="truncate text-sm font-medium text-gray-900">
            {{ todo.title }}
          </p>
          <p class="truncate text-sm text-gray-500">{{ todo.description }}</p>
          <p>{{ todo.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todo";

const toDoStore = useTodoStore();

// const items = [
//   { id: 1 },
//   // More items...
// ];
</script>
