import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3/discover"
const api_key = process.env.REACT_APP_API_KEY;


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