import { defineStore } from "pinia";
// import http from "@/services/http";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      tasks: [
        {
          userId: 1,
          id: 1,
          title: "Todo1",
          completed: true,
        },
        {
          userId: 2,
          id: 1,
          title: "Todo2",
          completed: false,
        },
      ],
      // title: JSON.parse(sessionStorage.getItem("user")).name || null,
      // description: JSON.parse(sessionStorage.getItem("user")).email || null,
    };
  },

  actions: {},
});
