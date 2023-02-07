<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";
import { onBeforeMount } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";

onBeforeMount(() => {
  toDoStore.fetchData();
});

const toDoStore = useTodoStore();
let open = ref(false);

function toggleState() {
  open.value = !open.value;
  console.log(open);
}
</script>

<template>
  <HeaderComponent />
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              You have {{ toDoStore.filteredList.length }} tasks. ({{
                toDoStore.allCompleted.length
              }}
              completed and {{ toDoStore.notCompleted.length }} not completed).
            </p>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <button
              @click="toggleState"
              type="button"
              class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create new task
            </button>
          </div>
        </div>
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
  <ModalComponent :open="{ open }" />
  <FooterComponent />
</template>

<style scoped>
.color-true {
  color: #2563eb;
}

.color-false {
  color: #ff005d;
}
</style>
