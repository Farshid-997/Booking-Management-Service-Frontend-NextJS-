import { IMeta, IReview } from "@/types";
import { baseApi } from "./baseApi";
const REVIEW_URL = "/review";
//@ts-ignore
export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (reviewData: any) => ({
        url: `${REVIEW_URL}/create-review`,
        method: "POST",
        data: reviewData,
      }),
      invalidatesTags: ["reviews"],
    }),

    getReview: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${REVIEW_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IReview[], meta: IMeta) => {
        return {
          booking: response,
          meta,
        };
      },
      providesTags: ["reviews"],
    }),

    getSingleReview: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),

    // updateBooking: build.mutation({
    //   query: (data) => ({
    //     url: `${REVIEW_URL}/${data.id}`,
    //     method: "PATCH",
    //     data: data.body,
    //   }),
    //   invalidatesTags: ["booking"],
    // }),

    // deleteBooking: build.mutation({
    //   query: (id) => ({
    //     url: `${BOOKING_URL}/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["booking"],
    // }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewQuery,
  useGetSingleReviewQuery,
} = reviewApi;
