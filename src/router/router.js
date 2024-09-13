import { createMemoryHistory, createRouter } from "vue-router";
import ResultPage from "../pages/ResultPage.vue";
import InfoPage from "../pages/InfoPage.vue";
import CalculationsPage from "../pages/CalculationsPage.vue";

const routes = [
  {
    path: "/",
    component: InfoPage,
  },
  {
    path: "/calculation",
    component: CalculationsPage,
  },
  {
    path: "/result",
    component: ResultPage,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
