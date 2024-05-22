import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPet: build.mutation({
      query: (data) => ({
        url: `/pets`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.pet],
    }),
    getAllPets: build.query({
      query: (data) => ({
        url: `/pets`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.pet],
    }),
    updatePet: build.mutation({
      query: (data) => ({
        url: `/pets/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.pet],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useGetAllPetsQuery,
  useUpdatePetMutation,
} = petApi;
