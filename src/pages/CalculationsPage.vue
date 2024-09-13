<template>
  <v-container
    class="d-flex justify-space-around align-start flex-row w-100 mt-7"
  >
    <PeopleCard />
    <FoodCard />
  </v-container>
  <div class="d-flex justify-center align-end w-100">
    <router-link
      to="/result"
      class="w-100 d-flex text-decoration-none justify-center"
    >
      <v-btn
        variant="outlined"
        style="color: white"
        class="pa-2 ma-2 w-75"
        size="x-large"
      >
        К результатам
      </v-btn>
    </router-link>
  </div>
</template>
<script setup>
import FoodCard from "../components/FoodCard.vue";
import PeopleCard from "../components/PeopleCard.vue";
</script>
