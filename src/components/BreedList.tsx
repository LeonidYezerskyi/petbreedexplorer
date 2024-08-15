"use client";

import React from "react";
import Link from "next/link";
import BreedItem from "./BreedItem";
import { getAllBreeds } from "@/services/api";

interface Image {
  url: string;
}

interface Breed {
  id: string;
  name: string;
  image: Image;
}

interface BreedListProps {
  initialBreeds: Breed[];
}

const BreedList: React.FC<BreedListProps> = ({ initialBreeds }) => {
  const [breeds, setBreeds] = React.useState<Breed[]>(initialBreeds);

  const handleLoadMore = async () => {
    const newBreeds = await getAllBreeds(breeds.length / 6 + 1);

    setBreeds((prevBreeds) => [...prevBreeds, ...newBreeds]);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 flex flex-col items-center">
        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {breeds.map((breed) => (
            <Link key={breed.id} href={`/breed/${breed.id}`} passHref>
              <BreedItem imageUrl={breed.image?.url} name={breed.name} />
            </Link>
          ))}
        </div>
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-primary-500 text-white py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default BreedList;
