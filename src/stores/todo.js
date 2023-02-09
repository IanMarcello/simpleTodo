import { defineStore } from "pinia";
import http from "@/services/http";

export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      tasks: [],
    };
  },

  getters: {
    filteredList: (state) => {
      const filteredList = state.tasks.filter((todo) => {
        return todo.userId === JSON.parse(sessionStorage.getItem("user")).id;
      });

      return filteredList;
    },

    allCompleted: (state) => {
      const allCompleted = state.tasks.filter((todo) => {
        return todo.completed === true;
      });

      return allCompleted;
    },

    notCompleted: (state) => {
      const notCompleted = state.tasks.filter((todo) => {
        return todo.completed === false;
      });

      return notCompleted;
    },
  },

  actions: {
    async fetchData() {
      return await http
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response)
        .then((data) => (this.tasks = data.data));
    },

    async addTodo() {
      const response = await http.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: JSON.parse(sessionStorage.getItem("user")).id,
          title: this.title,
          completed: false,
        }
      );

      this.tasks.push({
        userId: response.data.userId,
        title: this.title,
        completed: response.data.completed,
      });

      this.title = "";

      console.log(response);
      return response;
    },

    async deleteTodo(id) {
      this.tasks = this.tasks.filter((todo) => {
        return todo.id !== id;
      });
    },

    async toggleState(id) {
      const todo = this.tasks.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
});
