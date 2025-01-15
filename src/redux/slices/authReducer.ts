import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginResult } from "../../types";
import { AppDispatch } from "../store";

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, logoutSuccess } = authSlice.actions;

export const login = (result: LoginResult) => async (dispatch: AppDispatch) => {
  try {
    const token = result?.token;
    const user = JSON.stringify(result?.user);
    await localStorage.setItem("@TOKEN", token);
    await localStorage.setItem("@USER", user);
    dispatch(setToken(token));
    dispatch(setUser(result.user));  // Aquí no necesitas hacer un `JSON.parse`, ya tienes el objeto
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await localStorage.removeItem("@TOKEN");
    await localStorage.removeItem("@USER");
    dispatch(logoutSuccess());
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const loadUserData = () => async (dispatch: AppDispatch) => {
  try {
    const token = await localStorage.getItem("@TOKEN");
    const user = await localStorage.getItem("@USER");

    if (token && user) {
      dispatch(setToken(token));
      dispatch(setUser(JSON.parse(user)));  // Deserializa el usuario solo aquí, cuando lo recuperes
    } else {
      console.warn(
        "No se encontraron datos de usuario o token en AsyncStorage"
      );
    }
  } catch (error) {
    console.error(
      "Error al cargar los datos del usuario desde AsyncStorage:",
      error
    );
  }
};

export default authSlice.reducer;
