<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideNavComponent from "@/components/SideNavComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-1 flex-col sm:flex-row">
    <main class="flex-1 bg-indigo-50 px-2">
      <h1
        class="capitalize mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        THIS IS THE LANDING PAGE
      </h1>
    </main>
    <SideNavComponent />
  </div>
  <FooterComponent />
</template>
