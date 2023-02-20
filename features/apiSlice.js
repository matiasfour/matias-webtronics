import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const getDataFromUrls = async (urls) => {
  
  const results = await Promise.all(urls.map(url => fetch(url)));
  const merged = [].concat(...results.map(result => result));
  const errors = [].concat(...results.filter(result => result.error != null).map(result => result.error));
  const resultsData = await Promise.all(merged.map(url => url.json()));
  if (errors.length > 0)
      return { error: errors };
  return { data: resultsData };
}

export const apiRickMorty = createApi({
  reducerPath: "apiRickMorty",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api'
  }),
  endpoints: (builder) => ({
    getEndpoints: builder.query({
      query: () => '/'
    }),
    getData: builder.query({
      query: (endpoint) => endpoint,
      serializeQueryArgs: ({ endpoint }) => { 
        return endpoint
      },
      merge: (currentCache, newData) => {
        return {...currentCache, results: [...currentCache?.results, ...newData.results], info: newData.info}
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getCharacterData: builder.query({
      query: (character) => ({
        url: `${character}`
      })
    }),
    getLocation: builder.query({
      query: (location) => ({
        url: `${location}`

      })
    }),
    getEpisodes: builder.query({
      queryFn: (urls) => getDataFromUrls(urls)
    }),
    getEpisodeCharacters: builder.query({
      queryFn: (urls) => getDataFromUrls(urls)
    }),
    getLocationResidents: builder.query({
      queryFn: (urls) => getDataFromUrls(urls)
    })
   })
})


export const { useGetEndpointsQuery, useGetDataQuery, useGetCharacterDataQuery, useGetLocationQuery, useGetEpisodesQuery, useGetEpisodeCharactersQuery, useGetLocationResidentsQuery } = apiRickMorty;