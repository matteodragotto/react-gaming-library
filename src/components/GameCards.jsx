import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const GameCards = ({ game }) => {
  const image_url = "http://127.0.0.1:8000/storage/";

  return (
    <Link to={`/games/${game.id}`} className="no-underline text-black">
      <div className="w-96 sm:w-64 md:w-64 lg:w-80 border border-white rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500 hover:border-emerald-500 hover:scale-105 transition duration-300">
        <img className="w-full h-48 object-cover" src={`${image_url}${game.cover_image}`} alt={game.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white truncate hover:overflow-visible hover:whitespace-normal">{game.title}</div>
          <p className="text-gray-700 text-base text-white"><strong>Developer:</strong> {game.developer}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {game.genres && game.genres.map((genre) => (

              <SwiperSlide key={genre.id} className="border-2 border-emerald-400 rounded-full px-3 py-1 text-sm font-semibold text-center text-white mr-2 mb-2">
                {genre.name}
              </SwiperSlide>

            ))}
          </Swiper>

        </div>
      </div>
    </Link>

  );
}

export default GameCards;