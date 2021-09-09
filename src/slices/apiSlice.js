import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'https://hacker-news.firebaseio.com/v0/'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['lastNews', 'newsById'],
  keepUnusedDataFor: 120,
  endpoints: (builder) => ({
    getLastNewsIds: builder.query({
      query: () => 'newstories.json?print=pretty&orderBy="$key"&limitToFirst=100',
      providesTags: ['lastNews'],
    }),
    getNewsDataById: builder.query({
      query: (id) => `item/${id}.json?print=pretty`,
      providesTags: ['newsById'],
    }),
  }),
})

export const { useGetLastNewsIdsQuery, useGetNewsDataByIdQuery } = newsApi