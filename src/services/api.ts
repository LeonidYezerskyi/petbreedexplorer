import axios from "axios";

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  image: Image;
}

interface CatImage {
  id: string;
  url: string;
}

const API_KEY =
  "live_KNubCVMQsRfq9wKrsB0w66Wn5l4eTTiaKW9lcmf0b9vDMKnUB0HlsqBIr0TCWJm8";

export const getAllBreeds = async (page: number = 0): Promise<Breed[]> => {
  try {
    const { data } = await axios.get<Breed[]>(
      `https://api.thecatapi.com/v1/breeds?limit=12&page=${page}&api_key=${API_KEY}`
    );
    return data;
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
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${selectedBreedId}&api_key=${API_KEY}`
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
