import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import testSlice from '../slices/test.slice';

export const store = configureStore({
  reducer: {
    test: testSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;