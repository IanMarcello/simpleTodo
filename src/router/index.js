import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UserView from "@/views/UserView.vue";
import GuestView from "@/views/GuestView.vue";
import TodoView from "@/views/TodoView.vue";
import LandingView from "@/views/LandingView.vue";

function guardRoute(to, from, next) {
  var isAuthenticated = false;

  if (sessionStorage.getItem("user")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    next();
  } else {
    next({ name: "login" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingView,
      children: [
        {
          path: "/",
          name: "home",
          component: GuestView,
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: UserView,
          beforeEnter: guardRoute,
        },
        {
          path: "/todo",
          name: "todo",
          component: TodoView,
          beforeEnter: guardRoute,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
