import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => `https://randomuser.me/api/`,
            transformResponse: (response) => {
                if (response.results && Array.isArray(response.results)) {
                    return {
                        name: response.results[0].name,
                        login: response.results[0].login,
                        picture: response.results[0].picture,
                        email: response.results[0].email,
                        dob: response.results[0].dob,
                        location: response.results[0].location,
                        cell: response.results[0].cell,
                    }
                }
                return null
            },
        }),
    }),
})

export const { useGetUserQuery } = userApi
