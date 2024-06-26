import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../services/auth.service";

interface State {
  token: string;
  status: "idle" | "loading" | "successfully" | "error";
  error: string | null;
}

const initialState: State = {
  token: "",
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.token = ""), (state.error = null), (state.status = "idle");
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(login.rejected, (state, action) => {
        (state.status = "error"), (state.error = action.payload as string);
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          (state.status = "successfully"),
            (state.token = action.payload.token),
            (state.error = null);
        }
      )
      .addCase(login.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(register.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(register.fulfilled, (state) => {
        (state.status = "successfully"), (state.error = null);
      })
      .addCase(register.rejected, (state, action) => {
        (state.status = "error"), (state.error = action.payload as string);
      });
  },
});

export const logout = authSlice.actions;
export default authSlice.reducer;
