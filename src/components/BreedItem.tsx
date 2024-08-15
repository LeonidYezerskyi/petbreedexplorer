import React from "react";
import Image from "next/image";

interface BreedItemProps {
  imageUrl: string;
  name: string;
}

const BreedItem: React.FC<BreedItemProps> = ({ imageUrl, name }) => {
  return (
    <div className="h-88 w-72 p-1 hover:bg-secondary-300 rounded">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-12 xl:aspect-w-12">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg text-secondary-700">{name}</h3>
    </div>
  );
};

export default BreedItem;
