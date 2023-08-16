import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//new function called createApi from toolkit query,
//fetchbase query is a function we get from toolkit as well

//define end points ,
export const movieApi = createApi({
  reducerPath: "movieApi", //slice of the whole data stored inside our redux state
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API}` }), //defination of api url
  endpoints: (builder) => ({
    getMovie: builder.mutation({
      //The query callback may also return an object containing the URL, the HTTP method to use and a request body.
      query: ({ query }) => {
        return {
          url: `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
          method: "get", //by default this is a get request
        };
      },
    }),
  }),
});

export const { useGetMovieMutation } = movieApi;

/*
Mutation endpoints should define either a query callback that constructs the URL (including any URL query params), or a queryFn callback that may do arbitrary async logic and return a result
*/
