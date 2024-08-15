import React from "react";
import { getCatsByBreed } from "@/services/api.ts";
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
    origin: string;
    description: string;
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
  const cats = await getCatsByBreed(id);
  console.log("🚀 ~ BreedPage ~ cats:", cats);

  const breed = cats[0]?.breeds[0];

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
            <p className="mt-2 text-secondary-700">
              <strong>Origin country:</strong> {breed.origin}
            </p>
            <p className="mt-2 text-secondary-700">
              <strong>Life Span:</strong> {breed.life_span} years
            </p>
            <p className="mt-2 text-secondary-700">
              <strong>Description:</strong> {breed.description}
            </p>
          </div>
        )}
        <div className="pt-5 grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cats.map((cat) => (
            <div key={cat.id} className="group">
              <div className="w-full h-40 overflow-hidden rounded-lg bg-secondary-200">
                <Image
                  src={cat.url}
                  alt={cat.breeds[0]?.name || "Cat Image"}
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
