import { defineStore } from "pinia";
import http from "@/services/http";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      name: JSON.parse(sessionStorage.getItem("user")).name || null,
      email: JSON.parse(sessionStorage.getItem("user")).email || null,
      token: JSON.parse(sessionStorage.getItem("user")).token || null,
    };
  },

  actions: {
    async login() {
      const response = await http.post("/api/AuthAccount/Login", {
        email: this.email,
        password: this.password,
      });

      sessionStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.data.Name,
          email: this.email,
          token: response.data.data.Token,
        })
      );

      console.log(response);
      return response;
    },

    async register() {
      if (this.password !== this.confirm_password) return false;

      return await http.post("/api/AuthAccount/Register", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
  },
});
