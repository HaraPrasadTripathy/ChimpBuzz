import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const CategoriesArr = ['Home', 'Entertainment', 'Business', 'Health', 'Science', 'Sports', 'Technology'];

  return (
    <nav className="bg-gray-800 sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tse3.mm.bing.net/th?id=OIP.tSfb0ciZD50f_102hUOEXgHaHa&pid=Api&P=0&h=180"
                alt="Your Company"
                style={{ marginRight: "0.6rem", borderRadius: ".3rem" }}
              />
            </div>
            <div>
              <h1
                style={{
                  color: "white",
                  marginRight: "2rem",
                  fontSize: "1.5rem",
                  fontFamily: "cursive",
                }}
              >
                ChimpBuzz
              </h1>
            </div>
            <div className="flex space-x-4 mx-24">
              {CategoriesArr.map((element) => (
                <Link
                  key={element}
                  to={element === 'Home' ? '/' : `/${element.toLowerCase()}`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {element}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://tse3.mm.bing.net/th?id=OIP.8yocw7p35rkionqYIhZYBQHaHN&pid=Api&P=0&h=180"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
