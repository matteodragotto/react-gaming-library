import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";



const SearchFilters = ({ genres, platforms }) => {

  const { searchGames, fetchGames } = useGlobalContext();

  const [areGenresVisible, setAreGenresVisible] = useState(false);
  const [arePlatformsVisible, setArePlatformsVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const showGenres = () => {
    setAreGenresVisible(!areGenresVisible);
  }

  const showPlatforms = () => {
    setArePlatformsVisible(!arePlatformsVisible);
  }

  const handleGenreClick = (genreId) => {
    if (selectedGenre === genreId) {
      setSelectedGenre(null);
      if (!selectedPlatform) {
        fetchGames(1);
      } else {
        searchGames(`platform_id=${selectedPlatform}`);
      }
    } else {
      setSelectedGenre(genreId);
      if (selectedPlatform) {
        searchGames(`genre_id=${genreId}&platform_id=${selectedPlatform}`);
      } else {
        searchGames(`genre_id=${genreId}`);
      }
    }
    areGenresVisible && setAreGenresVisible(false);
  };


  const handlePlatformClick = (platformId) => {
    if (selectedPlatform === platformId) {
      setSelectedPlatform(null);
      if (!selectedGenre) {
        fetchGames(1);
      } else {
        searchGames(`genre_id=${selectedGenre}`);
      }
    } else {
      setSelectedPlatform(platformId);
      if (selectedGenre) {
        searchGames(`genre_id=${selectedGenre}&platform_id=${platformId}`);
      } else {
        searchGames(`platform_id=${platformId}`);
      }
    }
    arePlatformsVisible && setArePlatformsVisible(false);
  };

  const handleResetClick = () => {
    setSelectedGenre(null);
    setSelectedPlatform(null);
    setAreGenresVisible(false);
    setArePlatformsVisible(false);
    fetchGames(1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-4 my-5">
        <span>Filtra per:</span>
        <button onClick={() => showGenres()} className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-400 transition-colors flex justify-center items-center gap-2">
          Generi
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>

        <button onClick={() => showPlatforms()} className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-400 transition-colors flex justify-center items-center gap-2">
          Piattaforme
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
        {(selectedGenre || selectedPlatform ? <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors"
          onClick={() => handleResetClick()}
        >
          Rimuovi filtri
        </button> : null)}
      </div>

      {(areGenresVisible || arePlatformsVisible ?
        <div className="flex flex-col items-center gap-2 my-5">
          {(areGenresVisible ?
            <div className="border rounded-xs flex flex-wrap justify-center items-center gap-2 p-4">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors ${selectedGenre === genre.id ? 'bg-emerald-400' : 'bg-gray-800'}`}
                  onClick={() => handleGenreClick(genre.id)}
                >
                  {genre.name}
                </button>
              ))}
            </div> : null)}

          {(arePlatformsVisible ?
            <div className="border rounded-xs flex flex-wrap justify-center items-center gap-2 p-4">
              {arePlatformsVisible && platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors ${selectedPlatform === platform.id ? 'bg-blue-600' : 'bg-gray-800'}`}
                  onClick={() => handlePlatformClick(platform.id)}
                >
                  {platform.name}
                </button>
              ))}
            </div> : null)}
        </div>
        : null)}
    </div >
  );
}

export default SearchFilters;