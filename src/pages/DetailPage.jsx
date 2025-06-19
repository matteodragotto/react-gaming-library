import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const DetailPage = () => {

  const image_url = "http://127.0.0.1:8000/storage/";


  const { fetchGameById, game, extractYouTubeID } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchGameById(id)
  }, [id])

  console.log("Game details:", game);


  return (
    <div>
      <div className="flex justify-around my-5 text-white">
        <img
          src={game?.cover_image ? `${image_url}${game.cover_image}` : ""}
          alt={game?.title || "Game cover"}
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mt-5">{game?.title}</h1>
          <p className="mt-2">Description: {game?.description}</p>
          <p className="mt-2">Release Date: {game?.release_date}</p>
          <div className="mt-2 flex gap-1"> Generi:
            {game?.genres && game.genres.map((genre) => (
              <span key={genre.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {genre.name}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-1"> Piattaforme:
            {game?.platforms && game.platforms.map((platform) => (
              <span key={platform.id} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {platform.name}
              </span>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center my-20 w-full flex-1">
        {game && game.trailer_url ? (
          <YouTube
            videoId={extractYouTubeID(game.trailer_url)}
            opts={{
              width: '100%',
              height: '400px',
              playerVars: {
                autoplay: 1,
              },
            }}
            className="w-full max-w-3xl mx-auto"
          />
        ) : (
          <p className="text-center text-lg font-bold text-gray-600">No trailer available</p>
        )}
      </div>


    </div>
  );
}
export default DetailPage;