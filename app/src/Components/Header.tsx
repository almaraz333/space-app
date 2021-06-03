import { Link } from "react-router-dom";
import "../Sass/header.scss";

export type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <nav className="header flex items-center justify-between flex-wrap p-6 bg-primary shadow-md">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl tracking-tight mr-5">
          NAME NAME ???
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold"
          >
            News
          </Link>
          <Link
            to="/NASA-POTD"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold"
          >
            NASA Picture of the Day
          </Link>
          <Link
            to="/near-earth-objects"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold"
          >
            Near Earth Objects
          </Link>
        </div>
        <div>
          <Link
            to="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0 log-button"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};
