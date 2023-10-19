import { IBooking, IMeta } from "@/types";
import { baseApi } from "./baseApi";
const BOOKING_URL = "/booking";
//@ts-ignore
export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (bookingData: any) => ({
        url: `${BOOKING_URL}/create-booking`,
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),

    getBooking: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BOOKING_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          booking: response,
          meta,
        };
      },
      providesTags: ["booking"],
    }),

    getSingleBooking: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    updateBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["booking"],
    }),

    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
