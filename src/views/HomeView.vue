<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const user = JSON.parse(sessionStorage.getItem("user")).name;
</script>

<template>
  <HeaderComponent />
  <div class="py-40">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">Welcome user,</p>
      <h1
        class="capitalize mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {{ user }}
      </h1>

      <div class="mt-6">
        <router-link
          :to="{ name: 'todo' }"
          class="text-base font-medium text-indigo-600 hover:text-indigo-500"
        >
          See Your Tasks
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
