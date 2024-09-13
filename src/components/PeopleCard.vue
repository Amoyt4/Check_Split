<template>
  <v-card
    class="pa-2 ma-3 w-25 overflow-y-auto"
    variant="outlined"
    max-height="650"
  >
    <v-card-title class="pa-2 ma-2 d-flex justify-center align-center">
      <h2>Люди</h2>
    </v-card-title>
    <div class="d-flex v-row pa-2 ma-2 align-center justify-center">
      <v-text-field v-model="name" label="Имя" hide-details="auto" />
      <v-btn
        class="ml-2"
        icon="mdi-plus"
        variant="outlined"
        :disabled="!isValidInput"
        @click="onClickAddPeopleInCard"
      />
    </div>
    <v-card-item v-if="storePeople.length" class="pa-2 ma-2">
      <h3>Список людей:</h3>
      <div
        v-for="(human, index) in storePeople"
        :key="human.id"
        class="d-flex flex-row justify-space-between mt-1"
      >
        <p class="ml-1 d-flex align-center justify-center">
          {{ index + 1 }}) {{ human.name }}
        </p>
        <v-btn
          icon="mdi-trash-can-outline"
          size="small"
          color="red"
          variant="outlined"
          @click="onClickDeletePeopleLocal(human.id)"
        />
      </div>
    </v-card-item>
    <p v-else class="pa-2 ma-2">Список пуст :(</p>
  </v-card>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoomStore } from "/src/store/roomStore.js";
const store = useRoomStore();
const name = ref("");
const storePeople = store.$state.people;

const isValidInput = computed(() => {
  return name.value.length > 1;
});

const onClickAddPeopleInCard = () => {
  store.addPeople(name.value);
  name.value = "";
};

const onClickDeletePeopleLocal = (id) => {
  store.deletePeople(id);
};
</script>
