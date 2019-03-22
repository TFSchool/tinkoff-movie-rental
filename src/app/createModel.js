import { createStore } from '../helpers/createStore.js';
import { mapMovie } from '../helpers/mapMovie.js';

export const createModel = () =>
  createStore(
    {
      count: 0,
      results: [],
      error: false,
      searches: [],
    },
    (store) => ({
      search: async (currentState, searchTerm) => {
        store.setState({
          count: 0,
          results: [],
          error: false,
        });

        try {
          const data = await fetch(
            `http://www.omdbapi.com/?type=movie&apikey=7ea4aa35&s=${searchTerm}`
          ).then((r) => r.json());

          return data.Response === 'True'
            ? {
                count: data.totalResults,
                results: data.Search.map(mapMovie),
              }
            : { error: data.Error };
        } catch (error) {
          return { error };
        }
      },
    })
  );