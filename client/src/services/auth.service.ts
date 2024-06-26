import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/axiosIntance";
import axios from "axios";
import { notification } from "antd";

interface LoginResponse {
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  user_name: string;
  email: string;
  password: string;
}
export const login = createAsyncThunk<LoginResponse, LoginCredentials>(
  "login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authApi.post("/login", credentials);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Unknown error");
      }
    }
  }
);

export const register = createAsyncThunk<void, RegisterCredentials>(
  "register",
  async (credentials, { rejectWithValue }) => {
    try {
      await authApi.post("/register", credentials);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Unknown error");
      }
    }
  }
);
