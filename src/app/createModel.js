import { createStore } from '../helpers/createStore.js';
import { mapMovie } from '../helpers/mapMovie.js';
import {
  setFilmInfo,
  getFilmInfo,
  setCurrentResult,
  getCurrentResult,
} from '../services/browserStorage.js';

export const createModel = () =>
  createStore(
    {
      count: JSON.parse(getCurrentResult()).count,
      results: JSON.parse(getCurrentResult()).results ?? [],
      error: false,
      searches: [
        'Star Wars',
        'Kung Fury',
        'Back to the Future',
        'Matrix',
        'Terminator',
      ],
    },
    (store) => ({
      search: async (currentState, searchTerm) => {
        store.setState({
          count: 0,
          results: [],
          error: false,
          searches: [searchTerm].concat(
            currentState.searches.filter((term) => term !== searchTerm)
          ),
        });

        try {
          if (getFilmInfo(searchTerm)) {
            return JSON.parse(getFilmInfo(searchTerm));
          }

          const data = await fetch(
            `http://www.omdbapi.com/?type=movie&apikey=7ea4aa35&s=${searchTerm}`
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
        return {
          searches: currentState.searches.filter((term) => term !== searchTerm),
        };
      },
    })
  );
