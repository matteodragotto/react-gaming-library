import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link to="/" className="text-white no-underline hover:text-blue-500">
        <h1 className="text-2xl font-bold">Game Library</h1>
      </Link>
    </header>
  );
}

export default Header;