<script setup>
import { useTodoStore } from "@/stores/todo";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  toDoStore.fetchData();
});

const toDoStore = useTodoStore();
</script>

<template>
  <main class="flex-1 bg-indigo-50 px-2">
    <div class="mx-auto my-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div
            class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
          >
            <div class="ml-4 mt-4">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                To Do List
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ $t("you_have") }} {{ toDoStore.allCompleted.length }}
                {{ $t("completed_task") }}.
              </p>
            </div>
          </div>
        </div>
        <ul role="list" class="space-y-3">
          <li
            v-for="todo in toDoStore.allCompleted"
            :key="todo.id"
            class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6"
          >
            <div class="flex flex-row">
              <div class="truncate grow">
                <p class="truncate text-sm font-medium text-gray-900">
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
  </main>
</template>
