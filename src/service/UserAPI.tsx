import { createSlice, current } from "@reduxjs/toolkit";
import { UserLogin } from "../type/UserLogin";
import { infoLoginUser } from "../mock/user";

let initialState = { userInfo: infoLoginUser as UserLogin };
const userAPI = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      // localStorage.removeItem("userLogin");
      localStorage.setItem("userLogin", JSON.stringify(action.payload));
    },
  },
});
const { actions } = userAPI;
export const selectUser = (state: any) => state.user;
export const { loginUser } = actions;
export default userAPI.reducer;
