const Pagination = ({ games, prevPage, nextPage, hasNextPage, hasPrevPage, page }) => {

  return (
    <div className="pagination my-5 mx-auto w-full max-w-4xl flex flex-col items-center">
      {games.length > 0 && (
        <div className="flex justify-between w-full mt-8">
          <button
            onClick={() => prevPage()}
            disabled={!hasPrevPage}
            className={`px-4 py-2 bg-cyan-400 text-white rounded ${!hasPrevPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            Previous
          </button>
          <span className="text-lg font-bold">Page {page}</span>
          <button
            onClick={() => nextPage()}
            disabled={!hasNextPage}
            className={`px-4 py-2 bg-cyan-400 text-white rounded ${!hasNextPage ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;