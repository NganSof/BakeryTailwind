import { configureStore } from "@reduxjs/toolkit";
import bakeryAPI from "../service/BakeryAPI";
import userAPI from "../service/UserAPI";

export const store = configureStore({
  reducer: {
    bakerys: bakeryAPI,
    user: userAPI,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
