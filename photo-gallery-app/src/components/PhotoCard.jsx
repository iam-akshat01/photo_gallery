function PhotoCard({ photo, isFavorite, toggleFavourite }) {

  const url = photo.download_url;
  const photo_author = photo.author;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition">

      <img
        src={url}
        alt={photo_author}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-medium text-gray-700">
          {photo_author}
        </p>

        <button
          onClick={() => toggleFavourite(photo)}
          className={`text-4xl hover:scale-110 transition ${
            isFavorite ? "text-red-500" : "text-gray-400"
          }`}
        >
          ♥
        </button>

      </div>

    </div>
  );
}

export default PhotoCard;