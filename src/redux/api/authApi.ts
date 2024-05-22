import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useLoginUserMutation, useChangePasswordMutation } = authApi;
