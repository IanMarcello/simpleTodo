<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";
import { onBeforeMount } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

onBeforeMount(() => {
  toDoStore.fetchData();
});

const toDoStore = useTodoStore();
const open = ref(false);

function toggleState() {
  open.value = !open.value;
}

const addTodo = async () => await toDoStore.addTodo();
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-1 flex-col sm:flex-row">
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
                  You have {{ toDoStore.filteredList.length }} tasks. ({{
                    toDoStore.allCompleted.length
                  }}
                  completed and {{ toDoStore.notCompleted.length }} not
                  completed).
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
    </main>
    <SideNavComponent />
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <span class="material-symbols-outlined"> add </span>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg font-medium leading-6 text-gray-900"
                      >Add New Task</DialogTitle
                    >
                    <div class="block w-96 mt-2">
                      <textarea
                        rows="4"
                        v-model="toDoStore.title"
                        name="title"
                        id="title"
                        class="block text-sm p-2 text-gray-500 w-full resize-none rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    addTodo();
                    open = false;
                  "
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="open = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
