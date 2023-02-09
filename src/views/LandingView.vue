<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideNavComponent from "@/components/SideNavComponent.vue";
</script>

<template>
  <HeaderComponent />
  <SideNavComponent />
  <main>
    <div class="flex flex-col py-40">
      <div class="text-center">
        <h1
          class="capitalize mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          This is the Landing Page
        </h1>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
