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

      sessionStorage.setItem(
        "count",
        JSON.stringify({
          count: filteredList.length ? filteredList.length : 0,
        })
      );

      return filteredList;
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
      var count = parseInt(JSON.parse(sessionStorage.getItem("count")).count);

      if (count == 0) {
        this.count++;
      } else if (count > 0) {
        this.count = count;
      } else if (count < 0) {
        window.alert("Unexpected error when fetching data");
      }

      console.log(JSON.parse(sessionStorage.getItem("user")).id);
      console.log(count);
      console.log(this.title);

      const response = await http.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: JSON.parse(sessionStorage.getItem("user")).id,
          // id: this.count++,
          title: this.title,
          completed: false,
        }
      );

      this.tasks.push({
        userId: response.data.userId,
        // id: this.count,
        title: this.title,
        completed: response.data.completed,
      });

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
