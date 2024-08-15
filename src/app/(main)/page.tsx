import { getAllBreeds } from "@/services/api.ts";
import BreedList from "@/components/BreedList";

export default async function Home() {
  const initialCats = await getAllBreeds();

  return (
    <div className="flex w-full flex-col items-center">
      <BreedList initialCats={initialCats} />
    </div>
  );
}
