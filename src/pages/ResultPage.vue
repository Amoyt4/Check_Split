<template>
  <v-container class="d-flex w-100 mt-7">
    <v-card variant="outlined" class="w-100 pa-2 ma-2">
      <div class="d-flex flex-row justify-space-between">
        <v-card-title class="pa-2 ma-2 d-flex justify-center align-center">
          <h1>Результат</h1>
        </v-card-title>
        <v-card-actions class="d-flex justify-center align-center">
          <v-btn
            variant="outlined"
            size="x-large"
            class="pa-4"
            @click="onClickCalculateTotals"
          >
            Вычислить
          </v-btn>
        </v-card-actions>
      </div>
      <v-card-title>
        <h2>Кто сколько потратил:</h2>
      </v-card-title>
      <v-card-item>
        <div
          v-for="(object, index) in store.calculatedTotal"
          :key="object.id"
          class="mt-1"
        >
          <h3>
            {{ Number(index) + 1 }}) {{ object.name }}: {{ object.check }} ₽
          </h3>
        </div>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRoomStore } from "/src/store/roomStore.js";

const store = useRoomStore();

const onClickCalculateTotals = () => {
  store.updateCalculatedTotal();
};
</script>
