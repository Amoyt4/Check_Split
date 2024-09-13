<template>
  <v-app-bar :elevation="8" class="pa-2" rounded>
    <template #prepend>
      <v-icon icon="mdi-alphabet-piqad" class="ml-2 pa-1" size="x-large" />
      <v-app-bar-title class="ml-3 pa-1">
        <router-link to="/" style="text-decoration: none; color: white">
          <h2>ДелимЧек</h2>
        </router-link>
      </v-app-bar-title>
    </template>
    <template #append>
      <router-link to="/">
        <v-btn
          class="mr-2"
          variant="outlined"
          color="white"
          icon=""
          size="large"
        >
          <v-icon size="43"> mdi-information-slab-symbol </v-icon>
        </v-btn>
      </router-link>
      <router-link to="/calculation">
        <v-btn
          class="mr-2"
          variant="outlined"
          color="white"
          icon=""
          size="large"
        >
          <v-icon size="30"> mdi-calculator-variant-outline </v-icon>
        </v-btn>
      </router-link>
      <router-link to="/result">
        <v-btn variant="outlined" color="white" icon="" size="large">
          <v-icon size="30"> mdi-check </v-icon>
        </v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>
