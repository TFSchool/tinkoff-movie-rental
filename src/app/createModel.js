import { createStore } from '../helpers/createStore.js';
import { mapMovie } from '../helpers/mapMovie.js';
import {
  setFilmInfo,
  getFilmInfo,
  setCurrentResult,
  getCurrentResult,
  setSearches,
  getSearches,
} from '../services/browserStorage.js';

export const createModel = () =>
  createStore(
    {
      count: JSON.parse(getCurrentResult())?.count ?? 0,
      results: JSON.parse(getCurrentResult())?.results ?? [],
      error: false,
      searches: JSON.parse(getSearches()) ?? [
        'Star Wars',
        'Kung Fury',
        'Back to the Future',
        'Matrix',
        'Terminator',
      ],
    },
    (store) => ({
      search: async (currentState, searchTerm) => {
        const searches = [searchTerm].concat(
          currentState.searches.filter((term) => term !== searchTerm)
        );

        setSearches(JSON.stringify(searches));

        store.setState({
          count: 0,
          results: [],
          error: false,
          searches,
        });

        try {
          if (getFilmInfo(searchTerm)) {
            return JSON.parse(getFilmInfo(searchTerm));
          }

          const data = await fetch(
            `http://www.omdbapi.com/?type=movie&apikey=${
              process.env.API_KEY
            }&s=${searchTerm}`
          ).then((r) => r.json());

          const response =
            data.Response === 'True'
              ? {
                  count: data.totalResults,
                  results: data.Search.map(mapMovie),
                }
              : { error: data.Error };

          setFilmInfo(searchTerm, JSON.stringify(response));
          setCurrentResult(JSON.stringify(response));

          return response;
        } catch (error) {
          return { error };
        }
      },
      removeTag: (currentState, searchTerm) => {
        const searches = currentState.searches.filter(
          (term) => term !== searchTerm
        );

        setSearches(JSON.stringify(searches));

        return {
          searches,
        };
      },
    })
  );
