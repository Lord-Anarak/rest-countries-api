import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'


const CountriesAdapter = createEntityAdapter({})

const initialState = CountriesAdapter.getInitialState()

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}),
    tagTypes: ["Countries"],
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => ({
                url: '/all',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                },
            }),
            providesTags: ["Countries"],
        }),
    })
})

export const {useGetCountriesQuery} = api

