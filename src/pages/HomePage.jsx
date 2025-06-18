import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import GameCards from "../components/GameCards";


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
        {games.length > 0 && (
          <div className="flex justify-between w-full mt-8">
            <button
              onClick={() => prevPage()}
              disabled={!hasPrevPage}
              className={`px-4 py-2 bg-blue-500 text-white rounded ${!hasPrevPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Previous
            </button>
            <span className="text-lg font-bold">Page {page}</span>
            <button
              onClick={() => nextPage()}
              disabled={!hasNextPage}
              className={`px-4 py-2 bg-blue-500 text-white rounded ${!hasNextPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Next
            </button>
          </div>
        )}

      </div >
    </div>
  );
}

export default HomePage;