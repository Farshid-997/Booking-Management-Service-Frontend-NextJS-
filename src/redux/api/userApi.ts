import { IMeta, IUser } from "@/types";
import { baseApi } from "./baseApi";
const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${USER_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          user: response,
          meta,
        };
      },
      providesTags: ["users"],
    }),

    getSingleUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUserQuery, useGetSingleUserQuery } = userApi;
