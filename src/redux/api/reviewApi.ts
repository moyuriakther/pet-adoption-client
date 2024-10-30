import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: `/review`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review, tagTypes.pet],
    }),
    getAllReview: build.query({
      query: (data) => ({
        url: `/review`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    getReview: build.query({
      query: (data: any) => ({
        url: `/review/:id`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewQuery,
  useGetReviewQuery,
} = reviewApi;
