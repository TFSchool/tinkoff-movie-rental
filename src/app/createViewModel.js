export const createViewModel = (model) => {
  let state = {};
  let resultsListener = null;
  let countListener = null;
  let errorListener = null;
  let searchesListener = null;

  const update = (nextState) => {
    if (nextState.error) {
      console.error(nextState.error);
      return errorListener?.('Случилась ошибка. Проверьте консоль.');
    }

    resultsListener?.(nextState.results);
    countListener?.(nextState.count);
    searchesListener?.(nextState.searches);

    state = nextState;
  };

  return {
    bindError: (listener) => (errorListener = listener),
    bindCount: (listener) => (countListener = listener),
    bindResults: (listener) => (resultsListener = listener),
    bindSearches: (listener) => (searchesListener = listener),
    handleSearchSubmit: (searchTerm) => model.search(searchTerm),
    handleTagClick: (searchTerm) => model.search(searchTerm),
    handleTagRemove: (searchTerm) => model.removeTag(searchTerm),
    init: () => {
      update(model.getState());
      model.subscribe(update);
    },
  };
};
