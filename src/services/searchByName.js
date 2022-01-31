import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3/search"
const api_key = "831c226c8b60d13569e80af30352e363";

export const searchByNameApi = createApi({
    reducerPath: 'searchByNameApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        searchByNameApi: builder.query({
            query: ({name, page}) => `/movie?api_key=${api_key}&query=${name}&page=${page}`
        })
    })
});

export const {
    useSearchByNameApiQuery,

} = searchByNameApi;