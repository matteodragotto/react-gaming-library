import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import GameCards from "../components/GameCards";
import Pagination from "../components/Pagination";


const HomePage = () => {

  const { fetchGames, games, prevPage, nextPage, hasNextPage, hasPrevPage, page } = useGlobalContext();

  useEffect(() => {
    fetchGames();
  }, []);

  console.log("Games fetched:", games);


  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 my-10 mx-auto px-4">
        {games.length === 0 && <p className="text-center text-lg font-bold text-gray-600">Loading....</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {games.map((game) => (
            <div key={game.id} className="flex justify-center w-full">
              <GameCards game={game} />
            </div>
          ))}
        </div>
      </div >
      <Pagination games={games} prevPage={prevPage} nextPage={nextPage} hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} page={page} />

    </div>
  );
}

export default HomePage;