import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-secondary-300 border-secondary-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              PetBreedExplorer
            </span>
          </a>

          <a
            href="/"
            className="font-bold text-primary-700 hover:underline hover:text-primary-600"
            aria-current="page"
          >
            Home
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
