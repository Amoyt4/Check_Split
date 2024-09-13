<template>
  <v-container class="w-100 h-50 mt-7 d-flex align-center justify-center">
    <v-card class="pa-2 ma-2 mt-7 w-50 rounded-xl" variant="outlined">
      <div class="d-flex flex-column justify-center align-center">
        <v-card-title class="pa-2 ma-2 text-h5">
          Как пользоваться сайтом?
        </v-card-title>
      </div>
      <v-card-text
        class="pa-2 ma-2 ml-5 font-weight-medium text-left text-h6 d-flex flex-column"
      >
        <div class="mb-2">
          <v-icon
            color="teal mr-2"
            size="large"
            icon="mdi-numeric-1-circle-outline"
          />
          Введите неповторяющиеся имена людей.
        </div>
        <div class="mb-2">
          <v-icon
            color="teal mr-2"
            size="large"
            icon="mdi-numeric-2-circle-outline"
          />
          Введите продукты и их стоимость.
        </div>
        <div class="mb-2">
          <v-icon
            icon="mdi-numeric-3-circle-outline"
            color="teal mr-2"
            size="large"
          />
          Выберете сколько людей ели ту или иную еду и в каком количестве.
        </div>
        <div class="mb-2">
          <v-icon color="teal mr-2" size="large" icon="mdi-star-outline" />
          Вы всегда можете вернуться к добавлению продуктов через навигационную
          панель справа сверху
        </div>
      </v-card-text>
      <v-card-item class="d-flex justify-center align-center pa-2 ma-2">
        <router-link
          to="/calculation"
          style="text-decoration: none; color: white"
        >
          <v-btn class="pa-2 ma-2" variant="outlined"> Всё понял </v-btn>
        </router-link>
      </v-card-item>
    </v-card>
  </v-container>
</template>
