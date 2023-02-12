<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const authStore = useAuthStore();

const user = JSON.parse(sessionStorage.getItem("user"));
const show = ref(false);

function toggleShow() {
  show.value = !show.value;
}

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <a
    @click="toggleShow"
    class="inline-flex order-first p-1 sm:hidden bg-gradient-to-b to-gold-800 from-indigo-800 items-start"
  >
    <span
      class="material-symbols-outlined text-white p-2 rounded-lg hover:bg-indigo-800"
    >
      menu
    </span>
  </a>

  <nav
    class="order-first bg-gradient-to-b from-gold-800 to-indigo-800 px-2 transition-transform -translate-x-full sm:-translate-y-0 sm:translate-x-0"
    :class="show ? 'translate-x-0 -translate-y-1' : '-translate-x-full'"
  >
    <div class="h-full flex flex-col justify-between px-3 py-4">
      <div
        class="overflow-y-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800"
      >
        <ul class="space-y-2">
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-gold-800 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> home </span>
              <span class="ml-3">Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: '' }"
              v-if="typeof user === undefined || user === null"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-gold-800 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> home </span>
              <span class="ml-3">Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'todo' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-gold-800 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> draft </span>
              <span class="ml-3">Tasks</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'completedTasks' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-gold-800 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> task </span>
              <span class="ml-3">Completed Tasks</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'ongoingTasks' }"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-gold-800 hover:to-indigo-900"
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
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> app_registration </span>
              <span class="ml-3">Register</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> login </span>
              <span class="ml-3">Login</span>
            </router-link>
          </li>

          <li>
            <a
              @click="logout"
              v-if="!(typeof user === undefined || user === null)"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-900"
            >
              <span class="material-symbols-outlined"> logout </span>
              <span class="ml-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
