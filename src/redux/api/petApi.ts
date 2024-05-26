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
      query: (args: Record<string, any>) => (
        console.log(args, "args"),
        {
          url: `/pets`,
          method: "GET",
          params: args,
        }
      ),
      providesTags: [tagTypes.pet],
    }),
    getPet: build.query({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),
    updatePet: build.mutation({
      query: ({ id, body }) => (
        console.log(id, body),
        {
          url: `/pets/${id}`,
          method: "PUT",
          data: body,
        }
      ),
      invalidatesTags: [tagTypes.pet],
    }),
    softDeletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}/soft`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pet],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useGetPetQuery,
  useGetAllPetsQuery,
  useUpdatePetMutation,
  useSoftDeletePetMutation,
} = petApi;
