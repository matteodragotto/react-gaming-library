import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black-900 text-white p-4">
      <Link to="/" className="text-white no-underline hover:text-blue-500">
        <div className="logo flex items-center">
          <img src="/logo-white.svg" alt="Logo" className="h-12 w-12 inline-block mr-2" />
          <h1 className="text-2xl font-bold">Save Point</h1>

        </div>
      </Link>
      <hr className="my-2 p-4" />
    </header>
  );
}

export default Header;