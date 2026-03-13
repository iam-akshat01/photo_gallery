import { useState, useEffect } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const images = await response.json();
        setPhotos(images);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
