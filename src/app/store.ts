import { configureStore } from "@reduxjs/toolkit";
import bakeryAPI from "../service/BakeryAPI";
import userAPI from "../service/UserAPI";
import StoreAPI from "../service/StoreAPI";

export const store = configureStore({
  reducer: {
    bakerys: bakeryAPI,
    user: userAPI,
    stores: StoreAPI,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
