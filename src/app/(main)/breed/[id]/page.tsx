import React from "react";
import { getCatsByBreed, getDogsByBreed } from "@/services/api";
import Image from "next/image";
import { Container } from "@/components/Container";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
  breeds: {
    weight: {
      imperial: string;
      metric: string;
    };
    name: string;
    temperament: string;
    origin?: string;
    country_code?: string;
    description?: string;
    bred_for?: string;
    life_span: string;
  }[];
}

interface BreedPageProps {
  params: {
    id: string;
  };
}

const BreedPage = async ({ params }: BreedPageProps) => {
  const { id } = params;
  const isNumberId = !isNaN(Number(id));

  let animals;

  try {
    if (isNumberId) {
      animals = await getDogsByBreed(id);
    } else {
      animals = await getCatsByBreed(id);
    }
  } catch (error) {
    console.error("Error fetching breed data:", error);
    return <div>Error fetching breed data</div>;
  }

  const breed = animals[0]?.breeds[0];

  return (
    <div className="flex w-full flex-col items-center">
      <Container className="py-10">
        {breed && (
          <div className="p-4 border border-secondary-200 rounded-lg bg-secondary-300">
            <h1 className="text-center font-bold">{breed.name}</h1>
            <p className="mt-2 text-secondary-700">
              <strong>Weight:</strong> {breed.weight.metric} (
              {breed.weight.imperial}) kg
            </p>
            <p className="mt-2 text-secondary-700">
              <strong>Temperament:</strong> {breed.temperament}
            </p>
            {(breed.origin || breed.country_code) && (
              <p className="mt-2 text-secondary-700">
                <strong>Origin:</strong> {breed.origin || breed.country_code}
              </p>
            )}
            <p className="mt-2 text-secondary-700">
              <strong>Life Span:</strong> {breed.life_span} years
            </p>
            {(breed.description || breed.bred_for) && (
              <p className="mt-2 text-secondary-700">
                <strong>Description:</strong>{" "}
                {breed.description || breed.bred_for}
              </p>
            )}
          </div>
        )}
        <div className="pt-5 grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {animals.map((animal) => (
            <div key={animal.id} className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg bg-secondary-200">
                <Image
                  src={animal.url}
                  alt={animal.breeds[0]?.name || "Animal Image"}
                  width={500}
                  height={500}
                  className="group-hover:opacity-75"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BreedPage;
