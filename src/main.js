import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import Login from "./pages/Login.vue";
import Daftar from "./pages/Daftar.vue";
import Home from "./pages/Home.vue";
import AktivitasSelesai from "./pages/AktivitasSelesai.vue";
import AktivitasDibuat from "./pages/AktivitasDibuat.vue";
import CreateForm from "./pages/CreateForm.vue";
import InForm from "./pages/InForm.vue";
import Price from "./pages/Price.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/daftar",
    name: "Daftar",
    component: Daftar,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/aktivitasselesai",
    name: "AktivitasSelesai",
    component: AktivitasSelesai,
  },
  {
    path: "/aktivitasdibuat",
    name: "AktivitasDibuat",
    component: AktivitasDibuat,
  },
  {
    path: "/create-form",
    name: "CreateForm",
    component: CreateForm,
  },
  {
    path: "/in-form",
    name: "InForm",
    component: InForm,
  },
  {
    path: "/price",
    name: "Price",
    component: Price,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "Final-Project";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
