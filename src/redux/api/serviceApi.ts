import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
const SERVICE_URL = "/service";
//@ts-ignore
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (serviceData: any) => ({
        url: `${SERVICE_URL}/create-service`,
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: ["service"],
    }),

    getService: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${SERVICE_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          service: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),

    getSingleService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["service"],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
