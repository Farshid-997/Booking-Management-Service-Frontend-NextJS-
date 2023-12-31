import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
// import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://booking-service-farshid-997.vercel.app/api/v1",
  }),

  // baseQuery: axiosBaseQuery({
  //   baseUrl: "http://localhost:5000/api/v1",
  // }),
  endpoints: () => ({}),
  tagTypes: ["user", "service", "users", "booking", "reviews"],
});
