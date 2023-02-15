<script setup>
// import { useI18n } from "vue-i18n";

const user = JSON.parse(sessionStorage.getItem("user")).name;

// const { t } = useI18n();
</script>

<template>
  <main
    class="flex flex-1 -mt-c70 sm:-mt-0 text-center sm:items-center justify-center"
  >
    <div>
      <p class="text-base font-semibold text-indigo-600">
        {{ $t("welcome") }},
      </p>
      <h1
        class="capitalize text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {{ user }}
        <!-- {{ t("title") }} -->
      </h1>

      <div class="mt-6">
        <router-link
          :to="{ name: 'todo' }"
          class="text-base font-medium text-indigo-600 hover:text-indigo-500"
        >
          {{ $t("see_task") }}
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>
    </div>
  </main>
</template>
