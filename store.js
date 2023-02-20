import { configureStore } from '@reduxjs/toolkit'
import { apiRickMorty } from './features/apiSlice'


export const store = configureStore({
  reducer: {
    [apiRickMorty.reducerPath]: apiRickMorty.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiRickMorty.middleware)
})

