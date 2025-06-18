import axios from "axios";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = "http://127.0.0.1:8000/api/games/";

  const [games, setGames] = useState([]);

  const fetchGames = () => {
    axios.get(api_url)
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error("Error fetching games:", error);
      });
  }

  const value = {
    fetchGames,
    games,
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