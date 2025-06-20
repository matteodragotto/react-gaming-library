import { Link } from "react-router-dom";


const GameCards = ({ game }) => {
  const image_url = "http://127.0.0.1:8000/storage/";

  return (
    <Link to={`/games/${game.id}`} className="no-underline text-black hover:text-blue-500">
      <div className="max-w-sm border border-white rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={`${image_url}${game.cover_image}`} alt={game.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{game.title}</div>
          <p className="text-gray-700 text-base text-white"><strong>Developer:</strong> {game.developer}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {game.genres && game.genres.map((genre) => (
            <span key={genre.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </Link>

  );
}

export default GameCards;