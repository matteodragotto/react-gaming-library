import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const DetailPage = () => {

  const image_url = "http://127.0.0.1:8000/storage/";


  const { fetchGameById, game, extractYouTubeID } = useGlobalContext();
  const { id } = useParams();
  const [isTrailerShown, setIsTrailerShown] = useState(false);

  const showTrailer = () => {
    setIsTrailerShown(!isTrailerShown);
  }


  useEffect(() => {
    fetchGameById(id)
  }, [id, fetchGameById(id)])

  console.log("Game details:", game);


  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-around my-5 text-white">
        <img
          src={game?.cover_image ? `${image_url}${game.cover_image}` : ""}
          alt={game?.title || "Game cover"}
          className="w-full max-w-3xl rounded-lg shadow-lg p-2 xl:p-0"
        />
        <div className="flex flex-col p-2 xl:p-0">
          <h1 className="text-2xl font-bold mt-5">{game?.title}</h1>
          <p className="mt-2"><strong>Sviluppatore:</strong> {game?.developer}</p>
          <p className="mt-2"><strong>Publisher:</strong> {game?.publisher}</p>
          <p className="mt-2"><strong>Descrizione:</strong> {game?.description}</p>
          <p className="mt-2"><strong>Data di rilascio:</strong> {game?.release_date}</p>
          <div className="mt-2 flex flex-wrap gap-1"><strong>Generi:</strong>
            {game?.genres && game.genres.map((genre) => (
              <span key={genre.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {genre.name}
              </span>
            ))}
          </div>

          <h5><strong>Piattaforme:</strong></h5>
          <div className="mt-2 flex flex-wrap gap-1">
            {game?.platforms && game.platforms.map((platform) => (
              <span key={platform.id}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                style={{ backgroundColor: platform.color || '#e0e0e0' }}>

                {platform.name}
              </span>
            ))}
          </div>
          <div>
            {game && game.trailer_url && (
              <div className="flex flex-col items-center xl:items-start">
                <button onClick={() => showTrailer()} className="mt-2 bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-500 transition-colors pulse-emerald-glow">
                  Guarda Trailer
                </button>
              </div>

            )}
          </div>

        </div>

      </div>
      <div className="flex justify-center items-center my-20 w-full flex-1 p-2 xl:p-0">
        {isTrailerShown ? (
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
          null
        )}
      </div>


    </div>
  );
}
export default DetailPage;