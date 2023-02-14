<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import LocaleComponent from "@/components/LocaleComponent.vue";

const router = useRouter();
const authStore = useAuthStore();

const user = JSON.parse(sessionStorage.getItem("user"));

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <header class="bg-gradient-to-r from-slate-900 to-indigo-800 p-2">
    <nav class="mx-auto w-full px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex flex-row w-full justify-between py-3">
        <div>
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">Your Company</span>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt=""
            />
          </router-link>
        </div>
        <div class="flex flex-row gap-x-1 md:gap-x-2">
          <div class="px-2">
            <LocaleComponent />
          </div>
          <div>
            <span
              v-if="!(typeof user === undefined || user === null)"
              class="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100"
            >
              <svg
                class="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          </div>
          <div>
            <router-link
              :to="{ name: 'login' }"
              v-if="typeof user === undefined || user === null"
              class="inline-block cursor-pointer rounded-md border border-transparent bg-white py-2 px-3 sm:px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >{{ $t("log_in") }}</router-link
            >
          </div>
          <div>
            <router-link
              :to="{ name: 'register' }"
              v-if="typeof user === undefined || user === null"
              class="inline-block cursor-pointer rounded-md border border-transparent bg-white py-2 px-3 sm:px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >{{ $t("register") }}</router-link
            >
          </div>
          <div>
            <a
              v-if="!(typeof user === undefined || user === null)"
              @click="logout"
              class="inline-block cursor-pointer rounded-md border border-transparent bg-white py-2 px-3 sm:px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >{{ $t("logout") }}</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
