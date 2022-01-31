import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3/discover"
const api_key = "831c226c8b60d13569e80af30352e363";


export const searchByGenreApi = createApi({
    reducerPath: 'searchByGenreApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        searchByGenre: builder.query({
            query: ({page, genre}) => `/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}&with_genres=${genre}`
        })
    })
});

export const {
    useSearchByGenreQuery,

} = searchByGenreApi;