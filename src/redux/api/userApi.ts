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

    updateUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
