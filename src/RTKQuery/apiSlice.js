import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi =createApi({
    reducerPath : "pokemonApi",
    baseQuery : fetchBaseQuery({baseUrl : "https://fakestoreapi.com/"}),
    endpoints : (builder) => ({
        getPokemonByName :  builder.query({
            query : (category) => `${category}`
        }),
        updatePost : builder.mutation({
            query : ({id , data})=>({
                url : `products/${id}`,
                method : "PUT",
                body : data

            })
        })
    })
})

export const  {useGetPokemonByNameQuery , useUpdatePostMutation} = pokemonApi