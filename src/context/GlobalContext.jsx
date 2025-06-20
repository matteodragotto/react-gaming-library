import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = "http://127.0.0.1:8000/api/";

  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const fetchGames = (pageNumber = 1) => {
    axios.get(`${api_url}games/?page=${pageNumber}`)
      .then(response => {
        setGames(response.data.data.data);
        setPage(response.data.data.current_page);
        setHasNextPage(response.data.data.next_page_url !== null);
        setHasPrevPage(response.data.data.prev_page_url !== null);
      })
      .catch(error => {
        console.error("Error fetching games:", error);
      });
  };

  const nextPage = () => {
    if (hasNextPage) {
      fetchGames(page + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage && page > 1) {
      fetchGames(page - 1);
    }
  };

  const fetchGameById = (id) => {
    return axios.get(`${api_url}games/${id}/`)
      .then(response => {
        setGame(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching game by ID:", error);
        throw error;
      });
  }

  const fetchGenres = () => {
    return axios.get(`${api_url}genres/`)
      .then(response => {
        setGenres(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching genres:", error);
        throw error;
      });
  }

  const fetchPlatforms = () => {
    return axios.get(`${api_url}platforms/`)
      .then(response => {
        setPlatforms(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching platforms:", error);
        throw error;
      });
  }

  const searchGames = (query) => {
    return axios.get(`${api_url}search/?${query}`)
      .then(response => {
        setGames(response.data.data);
      })
      .catch(error => {
        console.error("Error searching games:", error);
        throw error;
      });
  }


  function extractYouTubeID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }


  const value = {
    fetchGames,
    games,
    nextPage,
    prevPage,
    page,
    hasNextPage,
    hasPrevPage,
    fetchGameById,
    game,
    fetchGenres,
    genres,
    fetchPlatforms,
    platforms,
    searchGames,
    extractYouTubeID
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>)
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };