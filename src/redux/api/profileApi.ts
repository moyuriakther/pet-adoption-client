import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: `/profiles`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUserStatus: build.mutation({
      query: ({ id, body }) => (
        console.log(body, IDBCursorWithValue),
        {
          url: `/users/status/${id}`,
          method: "PUT",
          data: body,
        }
      ),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserRole: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/role/${id}`,
        method: "PUT",
        data: body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PUT",
        data: data,
        contentType: "application/json",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} = profileApi;
