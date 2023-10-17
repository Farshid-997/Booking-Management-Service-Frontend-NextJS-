import { baseApi } from "./baseApi";
const SERVICE_URL = "/service";

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

    // userRegister: build.mutation({
    //   query: (registerData) => ({
    //     url: `${SERVICE_URL}/signup`,
    //     method: "POST",
    //     data: registerData,
    //   }),
    //   invalidatesTags: ["user"],
    // }),
  }),
});

export const { useCreateServiceMutation } = serviceApi;
