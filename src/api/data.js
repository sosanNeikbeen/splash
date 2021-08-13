import { useState, useEffect } from "react";
import unsplash from "./unsplash";

const useUnsplashSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await unsplash.get("/search/photos", {
        params: { query: term, per_page: 20 },
      });
      setData(response.data.results);
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useUnsplashSearch;
