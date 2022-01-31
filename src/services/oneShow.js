import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3/movie"
const api_key = "831c226c8b60d13569e80af30352e363";


export const oneShowhApi = createApi({
    reducerPath: 'oneShowhApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        oneShow: builder.query({
            query: (id) => `/${id}?api_key=${api_key}&append_to_response=videos`
        })
    })
});

export const {
    useOneShowQuery,

} = oneShowhApi;

