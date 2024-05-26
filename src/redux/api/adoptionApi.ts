import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const adoptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => ({
        url: `/adoption-request`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.adoption],
    }),
    getAllAdoptionRequest: build.query({
      query: (data) => ({
        url: `/adoption-requests`,
        method: "GET",
      }),
      providesTags: [tagTypes.adoption],
    }),
    myAdoptedPets: build.query({
      query: (data: any) => ({
        url: `/adoption-requests/my-pets`,
        method: "GET",
      }),
      providesTags: [tagTypes.adoption],
    }),
    updateAdoptionRequest: build.mutation({
      query: (data: any) =>
        // console.log(data),
        ({
          url: `/adoption-request/${data.id}`,
          method: "PUT",
          data: data.body,
        }),
      invalidatesTags: [tagTypes.adoption],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAllAdoptionRequestQuery,
  useUpdateAdoptionRequestMutation,
  useMyAdoptedPetsQuery,
} = adoptionApi;
