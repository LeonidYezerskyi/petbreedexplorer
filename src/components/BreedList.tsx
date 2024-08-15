"use client";

import React, { useState } from "react";
import Link from "next/link";
import BreedItem from "./BreedItem";
import { getAllBreeds } from "@/services/api.ts";

interface BreedListProps {
  initialCats: {
    id: string;
    name: string;
    image: {
      url: string;
    };
  }[];
}

const BreedList: React.FC<BreedListProps> = ({ initialCats }) => {
  const [cats, setCats] = useState(initialCats);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    try {
      const newPage = page + 1;
      const newCats = await getAllBreeds(newPage);
      setCats((prevCats) => [...prevCats, ...newCats]);
      setPage(newPage);
    } catch (error) {
      console.error("Error loading more breeds:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
          {cats.map((cat) => (
            <Link key={cat.id} href={`/breed/${cat.id}`} passHref>
              <BreedItem imageUrl={cat.image?.url} name={cat.name} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-primary-500 text-secondary-100 px-4 py-2 rounded-lg hover:bg-primary-600 disabled:bg-secondary-400"
          >
            {loading ? "Завантаження..." : "Переглянути ще"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreedList;
