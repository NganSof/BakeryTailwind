import { createSlice } from "@reduxjs/toolkit";
import { infoBakey } from "../type/Bakery";

const initialState = {
  type: "",
  name: "",
  price: 0,
  quantity: 0,
  description: "",
} as infoBakey;

const bakeryAPI = createSlice({
  name: "bakerys",
  initialState,
  reducers: {
    createBakery(state, action) {},
    updateBakery(state, action) {},
    deleteBakery(state, action) {},
  },
});

const { actions, reducer } = bakeryAPI;
export const { createBakery, updateBakery, deleteBakery } = actions;
export default reducer;
