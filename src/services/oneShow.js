import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = "https://api.themoviedb.org/3"
const api_key = process.env.REACT_APP_API_KEY;


export const oneShowhApi = createApi({
    reducerPath: 'oneShowhApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        oneShow: builder.query({
            query: ({id, mediatype}) => `/${mediatype}/${id}?api_key=${api_key}&append_to_response=videos`
        })
    })
});

export const {
    useOneShowQuery,

} = oneShowhApi;

