import axios from "axios";

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

interface BreedBase {
  id: string;
  name: string;
  image: Image;
}

interface Cat extends BreedBase {
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
}

interface Dog extends BreedBase {
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  country_code?: string;
  bred_for?: string;
  description?: string;
  life_span: string;
}

interface CatImage {
  id: string;
  url: string;
}

interface DogImage {
  id: string;
  url: string;
}

export const getAllBreeds = async (
  page: number = 0
): Promise<(Cat | Dog)[]> => {
  try {
    const [catsResponse, dogsResponse] = await Promise.all([
      axios.get<Cat[]>(
        `https://api.thecatapi.com/v1/breeds?limit=12&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY_CATS}`
      ),
      axios.get<Dog[]>(
        `https://api.thedogapi.com/v1/breeds?limit=12&page=${page}&api_key=${process.env.NEXT_PUBLIC_API_KEY_DOGS}`
      ),
    ]);

    const cats = catsResponse.data;
    const dogs = dogsResponse.data;

    const combinedBreeds = [...cats, ...dogs];
    const shuffledBreeds = combinedBreeds.sort(() => 0.5 - Math.random());

    return shuffledBreeds;
  } catch (error) {
    console.error("Error getting all breeds:", error);
    throw error;
  }
};

export const getCatsByBreed = async (
  selectedBreedId: string
): Promise<CatImage[]> => {
  try {
    const { data } = await axios.get<CatImage[]>(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${selectedBreedId}&api_key=${process.env.NEXT_PUBLIC_API_KEY_CATS}`
    );
    return data;
  } catch (error) {
    console.error(
      `Error getting detailed information for breed ${selectedBreedId}:`,
      error
    );
    throw error;
  }
};

export const getDogsByBreed = async (
  selectedBreedId: string
): Promise<DogImage[]> => {
  try {
    const { data } = await axios.get<DogImage[]>(
      `https://api.thedogapi.com/v1/images/search?limit=8&breed_ids=${selectedBreedId}&api_key=${process.env.NEXT_PUBLIC_API_KEY_DOGS}`
    );
    return data;
  } catch (error) {
    console.error(
      `Error getting detailed information for dog breed ${selectedBreedId}:`,
      error
    );
    throw error;
  }
};
