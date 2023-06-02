import { createSlice, current } from "@reduxjs/toolkit";
import { infoBakey } from "../type/Bakery";
import { bakeryTypeDate } from "../mock/bakery";

let initialState = { listBake: bakeryTypeDate as infoBakey[] };
const bakeryAPI = createSlice({
  name: "bakerys",
  initialState,
  reducers: {
    getBakery(state, action) {
      return state;
    },
    createBakery(state, action) {
      let indBaNew: number = current(state.listBake)?.findIndex(
        (item: infoBakey) => {
          if (item.name === action.payload.name) {
            return 1;
          }
        }
      );
      if (indBaNew === -1) {
        state.listBake.push(action.payload);
        initialState = current(state);
      }
      return state;
    },
  },
});
const { actions } = bakeryAPI;
export const selectBakery = (state: any) => state.bakerys;
export const { getBakery, createBakery } = actions;
export default bakeryAPI.reducer;
