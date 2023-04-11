import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/user/RegisterCom.vue"),
  },
  {
    path: "/content",
    name: "content",
    component: () => import("../components/ContentCom.vue"),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () =>
      import("../components/contact/reservation/ReservationList.vue"),
  },
  {
    path: "/add-reservation",
    name: "add-reservation",
    component: () =>
      import("../components/contact/reservation/AddReservation.vue"),
  },
  {
    path: "/reservation/:email",
    name: "reservation-detail",
    component: () =>
      import("../components/contact/reservation/ReservationDetail.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("../components/intro/IntroCom.vue"),
  },
  // 로그인 페이지
  {
    path: "/login",
    name: "login",
    component: () => import("../components/user/LoginCom.vue"),
  },
  // 프로파일
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/user/ProfileCom.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
