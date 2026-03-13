const initialState = {
  favorites: {}
};

const favoritesReducer = (state, action) => {

  if (action.type === "ADD_FAVORITE") {

    return {
      ...state,
      favorites: {
        ...state.favorites,
        [action.payload.id]: action.payload
      }
    };

  }

  else if (action.type === "REMOVE_FAVORITE") {

    const updatedFavorites = { ...state.favorites };
    delete updatedFavorites[action.payload.id];

    return {
      ...state,
      favorites: updatedFavorites
    };

  }

  return state;
};

export { favoritesReducer, initialState };