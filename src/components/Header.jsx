import { Link } from "react-router-dom";

const Header = () => {

  const CrystalIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34D399"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        animation: 'pulseStroke 2s ease-in-out infinite',
        filter: 'drop-shadow(0 0 3px #34D399)',
      }}
    >
      <path d="M12 2 L15 6 L12 22 L9 6 Z" />
      <path d="M12 2 L6 10 L12 22 L18 10 Z" />
      <style>
        {`
        @keyframes pulseStroke {
          0%, 100% {
            stroke: #34D399;
            filter: drop-shadow(0 0 3px #34D399);
          }
          50% {
            stroke: #047857;
            filter: drop-shadow(0 0 6px #047857);
          }
        }
      `}
      </style>
    </svg>
  );


  return (
    <header className="bg-black-900 text-white p-4">
      <Link to="/" className="text-white no-underline hover:text-blue-500">
        <div className="logo flex items-center">
          {/* <img src="/logo-emerald.svg" alt="Logo" className="h-12 w-12 inline-block mr-2" /> */}
          <CrystalIcon className="h-12 w-12 inline-block mr-2" />
          <h1 className="text-2xl font-bold">Save Point</h1>

        </div>
      </Link>
      <hr className="mt-2 px-4" />
    </header>
  );
}

export default Header;