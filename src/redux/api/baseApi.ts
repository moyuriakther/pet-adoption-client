import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pet-adoption-three.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({}),
  tagTypes: tagTypesList,
});
