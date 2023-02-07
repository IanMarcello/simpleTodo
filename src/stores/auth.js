import { defineStore } from "pinia";
import http from "@/services/http";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      id: null,
      name: "",
      email: "",
      token: null,
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
          id: response.data.data.Id,
          name: response.data.data.Name,
          email: this.email,
          token: response.data.data.Token,
        })
      );

      return response;
    },

    async register() {
      if (this.password !== this.confirm_password) return false;

      const response = await http.post("/api/AuthAccount/Register", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.name = "";
      this.email = "";
      this.password = "";
      this.confirm_password = "";

      return response;
    },

    async logout() {
      sessionStorage.clear();
    },
  },
});
