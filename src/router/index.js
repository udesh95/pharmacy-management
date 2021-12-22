import Vue from "vue";
import VueRouter from "vue-router";
import AppLayout from "@/views/AppLayout";
import DashBoard from "@/views/DashBoard";
import DrugIssue from "@/views/DrugIssue";
import Stock from "@/views/Stock";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: AppLayout,
    children: [
      {
        path: "/dashboard",
        name: "DashBoard",
        component: DashBoard,
      },
      {
        path: "/drug-issue",
        name: "DrugIssue",
        component: DrugIssue,
      },
      {
        path: "/stock",
        name: "Stock",
        component: Stock,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
