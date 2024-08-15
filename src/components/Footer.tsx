import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-secondary-300 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-secondary-900"
        >
          PetBreedExplorer
        </a>
        <p className="my-6 text-secondary-700">
          Web application for familiarizing with pet breeds.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-secondary-900">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 font-bold">
              Home
            </a>
          </li>
        </ul>
        <span className="text-sm text-secondary-500 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            PetBreedExplorer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
