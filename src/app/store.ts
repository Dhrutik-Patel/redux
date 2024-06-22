import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import apiSlice from "../features/dogs/dogsApiSlice";
import productsApiSlice from "../features/products/productsApiSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(apiSlice.middleware) // Add the apiSlice.middleware here
            .concat(productsApiSlice.middleware); // Add the productsApiSlice.middleware here
    },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
