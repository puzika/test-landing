import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/' }),
  endpoints: builder => ({
    postImages: builder.mutation<number, FormData>({
      query: formData => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      })
    })
  })
});

export const { usePostImagesMutation } = apiSlice;