import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PRODUCTS_API_URL = "https://fakestoreapi.com/products";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const productsApiSlice = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "",
        }),
    }),
});

export const { useGetProductsQuery } = productsApiSlice;
export default productsApiSlice;
