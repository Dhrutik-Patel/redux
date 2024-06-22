import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOG_API_KEY = "live_ZofjDpL8y4cFPeYHFbp3lmnSrnrUwaqBNNiYwwIod8IntrW1vXu9T93ycwvVl7NN";

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    };
}

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.thedogapi.com/v1",
        prepareHeaders(headers) {
            headers.set("x-api-key", DOG_API_KEY);
            return headers;
        },
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query: (limit = 10) => `breeds?limit=${limit}`,
            }),
        };
    },
});

export const { useFetchBreedsQuery } = apiSlice;
export default apiSlice;
