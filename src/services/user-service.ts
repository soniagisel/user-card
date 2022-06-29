import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface User {
    firstName: string
    lastName: string
    password: string
    username: string
    picture: string
    email: string
    birthDate: string
    country: string
    phoneNumber: string
}

interface UserDataResponse {
    name: { first: string; last: string }
    login: {
        password: string
        username: string
    }
    picture: {
        large: string
    }
    email: string
    dob: {
        age: string
    }
    location: {
        country: string
    }
    cell: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery(),
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            query: () => `https://randomuser.me/api/`,

            transformResponse: (
                response: {
                    results: UserDataResponse[]
                },
                meta,
                arg,
            ) => {
                return {
                    firstName: response.results[0].name.first,
                    lastName: response.results[0].name.last,
                    password: response.results[0].login.password,
                    username: response.results[0].login.username,
                    picture: response.results[0].picture.large,
                    email: response.results[0].email,
                    birthDate: response.results[0].dob.age,
                    country: response.results[0].location.country,
                    phoneNumber: response.results[0].cell,
                }
            },
        }),
    }),
})

export const { useGetUserQuery } = userApi
