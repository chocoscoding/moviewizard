import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3/trending"
const api_key = process.env.REACT_APP_API_KEY;

export const trendingApi = createApi({
    reducerPath: 'trendingApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getTrends: builder.query({
            query: () => `/all/week?api_key=${api_key}`
        })
    })
});

export const {
    useGetTrendsQuery,

} = trendingApi;