import { createSlice, current } from "@reduxjs/toolkit";
import { infoBakey } from "../type/Bakery";

let initialState = {
  listStore: [] as infoBakey[],
  total: 0,
};
const storeAPI = createSlice({
  name: "stores",
  initialState,
  reducers: {
    pushStore(state, action) {
      let quan: number = 1;

      let indexBakery = [...state.listStore]?.findIndex((item) => {
        return item.name === action.payload.name;
      });

      if (indexBakery === -1) {
        state.listStore.push({
          ...action.payload,
          quanChoice: quan,
          sum: action.payload.price * quan,
          quantity: action.payload.quantity - 1,
        });
      } else {
        state.listStore?.forEach((it: infoBakey) => {
          if (it.name === action.payload.name && it.quantity > 0) {
            it.quanChoice++;
            it.quantity--;
            it.sum = it.price * it.quanChoice;
          }
        });
      }
      initialState = current(state);
      return state;
    },
    totalStore(state) {
      state.total = 0;
      state.listStore?.forEach((ite: infoBakey) => {
        state.total += ite.sum ? ite.sum : 0;
      });

      return state;
    },
    deleStore(state, action) {
      state.listStore.forEach((ite: infoBakey, ind: number) => {
        if (ite.name === action.payload.name && ite.quanChoice > 0) {
          ite.quanChoice--;
          ite.quantity++;
          ite.sum = ite.price * ite.quanChoice;
        }
        if (ite.quanChoice === 0) {
          state.listStore.splice(ind, 1);
        }
      });
    },
  },
});
const { actions } = storeAPI;
export const selectStore = (state: any) => state.stores;
export const { pushStore, totalStore, deleStore } = actions;
export default storeAPI.reducer;
