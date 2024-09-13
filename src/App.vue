<template class="app">
  <v-responsive>
    <v-app>
      <NavBar />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>
