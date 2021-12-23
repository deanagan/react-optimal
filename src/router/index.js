import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";

const routeInfos = [
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
