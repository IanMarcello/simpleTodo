<script setup>
import { useTodoStore } from "@/stores/todo";
import { onBeforeMount } from "vue";

const toDoStore = useTodoStore();

onBeforeMount(() => toDoStore.fetchData());

const addTodo = async () => {
  await toDoStore.addTodo();
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <form @submit.prevent="addTodo">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title</label
        >
        <div class="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="title"
            id="title"
            v-model="toDoStore.title"
            class="block w-full h-10 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Title of the Task"
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center mt-2 rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">To Do List</h3>
      </div>
      <ul role="list" class="space-y-3">
        <li
          v-for="todo in toDoStore.filteredList"
          :key="todo.id"
          class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
        >
          <div class="flex flex-row">
            <div class="truncate grow">
              <p class="truncate text-sm font-medium text-gray-900">
                {{ todo.id }}
                {{ todo.title }}
              </p>
              <p class="text-ellipsis overflow-hidden"></p>
            </div>
            <div class="flex-none w-14">
              <span
                @click="toDoStore.deleteTodo(todo.id)"
                class="material-symbols-outlined text-right cursor-pointer"
              >
                delete
              </span>
              <span
                @click="toDoStore.toggleState(todo.id)"
                :class="[todo.completed ? 'color-true' : 'color-false']"
                class="material-symbols-outlined text-right cursor-pointer"
              >
                done_all
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.color-true {
  color: #2563eb;
}

.color-false {
  color: #ff005d;
}
</style>
