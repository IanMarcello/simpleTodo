<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideNavComponent from "@/components/SideNavComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="flex flex-1 flex-col sm:flex-row">
    <RouterView></RouterView>
    <SideNavComponent />
  </div>
  <FooterComponent />
</template>
