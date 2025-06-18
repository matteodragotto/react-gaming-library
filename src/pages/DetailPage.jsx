import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const DetailPage = () => {

  const image_url = "http://127.0.0.1:8000/storage/";


  const { fetchGameById, game } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchGameById(id)
  }, [id])

  return (
    <div>
      <div className="flex flex-col items-center my-10 mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Game Details</h1>
        {game ? (
          <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-700 mb-4">{game.description}</p>
            <img src={`${image_url}${game.cover_image}`} alt={game.title} className="w-full h-auto rounded-lg" />
          </div>
        ) : (
          <p className="text-center text-lg font-bold text-gray-600">Loading...</p>
        )}
      </div>

    </div>
  );
}
export default DetailPage;