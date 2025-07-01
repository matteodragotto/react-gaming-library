import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate();
  const { searchGames, fetchGames } = useGlobalContext();
  const [searchData, setSearchData] = useState("");

  const handleSearch = () => {
    if (searchData.trim() === "") {
      fetchGames(1);
    } else {
      searchGames(`query=${searchData}`);
      navigate(`/`);
    }
    setSearchData("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  }

  return (
    <>
      <div className="space-x-4 shadow-lg flex items-center justify-center flex-col bar relative">
        <div className="flex items-center">
          <form className="max-w-lg flex mx-auto " onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-4 text-xl font-medium text-emerald-400 sr-only dark:text-white">Cerca</label>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>

              <input type="search" id="default-search" className="block lg:w-96 w-64 p-4 ps-10 text-sm text-emerald-400 border border-white rounded-lg placeholder-transparent lg:placeholder:text-emerald-500 bg-black" placeholder="Cerca giochi" required value={searchData} onChange={(e) => setSearchData(e.target.value)} />

              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-emerald-500 hover:scale-105 transition duration-300 hover:cursor-pointer" onClick={() => handleSearch()}>
                Cerca
              </button>
            </div>

          </form>

        </div >
      </div >
    </>
  );
}

export default SearchBar;