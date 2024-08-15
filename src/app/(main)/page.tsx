// Home.tsx

import { getAllBreeds } from "@/services/api.ts";
import BreedList from "@/components/BreedList";

export default async function Home() {
  const initialBreeds = await getAllBreeds();
  console.log("🚀 ~ Home ~ initialBreeds:", initialBreeds);

  return (
    <div className="flex w-full flex-col items-center">
      <BreedList initialBreeds={initialBreeds} />
    </div>
  );
}
