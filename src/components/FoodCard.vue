<template>
  <v-card
    variant="outlined"
    class="pa-2 ma-3 w-75 overflow-y-auto"
    max-height="650"
  >
    <v-card-title class="pa-2 ma-2 d-flex justify-center align-center">
      <h2>Продукты</h2>
    </v-card-title>
    <div class="pa-2 ma-2 d-flex align-center justify-space-between">
      <v-text-field
        v-model="name"
        label="Название продукта"
        type="text"
        hide-details="auto"
      />
      <v-text-field
        v-model="price"
        label="Его стоимость"
        class="ml-2"
        type="number"
        hide-details="auto"
      />
      <v-btn
        class="ml-2"
        variant="outlined"
        icon="mdi-plus"
        :disabled="!isValidInput"
        @click="onClickAddFoodCard"
      />
    </div>
    <v-combobox
      v-if="storePeople.length"
      v-model="selectedPeople"
      :items="storePeople"
      item-title="name"
      item-value="id"
      label="Кто???"
      class="pa-2 ma-2"
      variant="outlined"
      clearable
      chips
      multiple
    />
    <v-card-item v-if="storeFood.length" class="pa-2 ma-2">
      <h3>Список продуктов и их стоимости:</h3>
      <div
        v-for="(food, index) in storeFood"
        :key="food.id"
        class="d-flex flex-row justify-space-between mt-1"
      >
        <p class="ml-1 d-flex align-center justify-center">
          {{ index + 1 }}) {{ food.name }} - {{ food.price }}₽ -
          {{ food.arr.map((people) => people.name).join(", ") }}
        </p>
        <v-btn
          color="red"
          size="small"
          icon="mdi-trash-can-outline"
          variant="outlined"
          @click="onClickDeleteFoodLocal(food.id)"
        />
      </div>
    </v-card-item>
    <p v-else class="ma-2 pa-2">Список пуст :(</p>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoomStore } from "/src/store/roomStore.js";

const store = useRoomStore();
const price = ref("");
const name = ref("");
const selectedPeople = ref([]);
const storeFood = store.$state.food;
const storePeople = store.$state.people;

const isValidInput = computed(() => {
  return (
    name.value.length > 1 && price.value > 0 && selectedPeople.value.length > 0
  );
});

const onClickAddFoodCard = () => {
  if (name.value.length && price.value > 0 && selectedPeople.value.length) {
    store.addFood(name.value, price.value, selectedPeople.value);
  } else {
    alert(
      "Должен быть заполнен список имён, название продукта, стоимость продукта и список того кто его употреблял:)",
    );
  }
  name.value = "";
  price.value = "";
  selectedPeople.value = [];
};

const onClickDeleteFoodLocal = (id) => {
  store.deleteFood(id);
};
</script>
