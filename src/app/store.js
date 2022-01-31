import { configureStore } from "@reduxjs/toolkit";
import { oneShowhApi } from "../services/oneShow";
import { searchByGenreApi } from "../services/searchByGenre";
import { searchByNameApi } from "../services/searchByName";
import { trendingApi } from "../services/trendingApi";
     


export default configureStore({
    reducer: {
        [trendingApi.reducerPath]: trendingApi.reducer,
        [searchByNameApi.reducerPath]: searchByNameApi.reducer,
        [searchByGenreApi.reducerPath]: searchByGenreApi.reducer,
        [oneShowhApi.reducerPath]: oneShowhApi.reducer,
    },
})