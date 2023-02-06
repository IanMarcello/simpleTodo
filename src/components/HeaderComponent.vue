<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const navigation = [
  // { name: "Solutions", href: "#" },
  // { name: "Pricing", href: "#" },
  // { name: "Docs", href: "#" },
  // { name: "Company", href: "#" },
];

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();

  router.push({ name: "login" });
};
</script>

<template>
  <header class="bg-indigo-600">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none"
      >
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt=""
            />
          </a>
          <div class="ml-10 hidden space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-base font-medium text-white hover:text-indigo-50"
              >{{ link.name }}</a
            >
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <!-- <a
            href="#"
            class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >Sign in</a
          > -->
          <a
            @click="logout"
            class="inline-block cursor-pointer rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >Sign out</a
          >
        </div>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-base font-medium text-white hover:text-indigo-50"
          >{{ link.name }}</a
        >
      </div>
    </nav>
  </header>
</template>
