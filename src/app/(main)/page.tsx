import { getAllBreeds } from "@/services/api";
import BreedList from "@/components/BreedList";

export default async function Home() {
  const initialBreeds = await getAllBreeds();

  return (
    <div className="flex w-full flex-col items-center">
      <BreedList initialBreeds={initialBreeds} />
    </div>
  );
}
