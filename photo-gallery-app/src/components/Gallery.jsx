import { useState, useMemo, useReducer, useCallback, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import SearchIcon from "../assets/searchicon.png";
import { favoritesReducer } from "../reducer/favoritesReducer";

function CreateGallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [searchQuery, setSearchQuery] = useState("");

  const storedFavorites =
    JSON.parse(localStorage.getItem("favorites")) || {};

  const [state, dispatch] = useReducer(favoritesReducer, {
    favorites: storedFavorites,
  });

  const toggleFavourite = useCallback(
    (photo) => {
      if (state.favorites[photo.id]) {
        dispatch({
          type: "REMOVE_FAVORITE",
          payload: photo,
        });
      } else {
        dispatch({
          type: "ADD_FAVORITE",
          payload: photo,
        });
      }
    },
    [state.favorites]
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const authorMatch = photo.author
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const idMatch = photo.id.toString().includes(searchQuery);

      return authorMatch || idMatch;
    });
  }, [photos, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          ⚠ Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mt-4">

        <h1 className="text-3xl font-bold text-gray-800">
          Photo Gallery
        </h1>

        {/* Search Bar */}
        <div className="relative">

          <img
            src={SearchIcon}
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Filter by id or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-72 rounded-lg border border-gray-300 bg-white
                       shadow-sm hover:shadow-lg hover:scale-105
                       transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

        </div>

      </div>

      {/* Gallery Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavorite={state.favorites[photo.id]}
            toggleFavourite={toggleFavourite}
          />
        ))}

      </div>

    </div>
  );
}

export default CreateGallery;