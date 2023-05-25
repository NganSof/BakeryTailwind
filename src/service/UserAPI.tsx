import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLogin, UserSignUp } from "../type/UserLogin";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freeapi.code4func.com/api/v1",
  }),
  endpoints: (builder) => ({
    postInfoUser: builder.mutation<UserSignUp, {}>({
      query: (params) => {
        // console.log(params);
        return {
          method: "POST",
          url: `/user/sign-up`,
          params,
        };
      },
    }),
  }),
});
export const { usePostInfoUserMutation } = userApi;
export const { endpoints, reducerPath, reducer, middleware } = userApi;
