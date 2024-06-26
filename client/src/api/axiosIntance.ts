import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:3002/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: "http://localhost:3001/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
