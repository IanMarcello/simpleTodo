<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const user = JSON.parse(sessionStorage.getItem("user"));

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <!-- <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button> -->

  <nav class="order-first bg-indigo-600 px-2 max-h-screen">
    <div class="h-full flex flex-col justify-between px-3 py-4">
      <div
        class="overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800 bg-indigo-600"
      >
        <ul class="space-y-2">
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> home </span>
              <span class="ml-3">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="typeof user === undefined || user === null"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> home </span>
              <span class="ml-3">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> draft </span>
              <span class="ml-3">Task</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> task </span>
              <span class="ml-3">Completed Tasks</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> fast_forward </span>
              <span class="ml-3">Ongoing Tasks</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <hr class="w-full mb-2 sm:w-56" />
          <li>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> app_registration </span>
              <span class="ml-3">Register</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> login </span>
              <span class="ml-3">Login</span>
            </router-link>
          </li>

          <li>
            <button
              @click="logout"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-indigo-700"
            >
              <span class="material-symbols-outlined"> logout </span>
              <span class="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
