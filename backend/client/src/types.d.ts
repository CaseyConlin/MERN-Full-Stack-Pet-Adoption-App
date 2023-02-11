type PetData = {
  totalPetsResults: number;
  data: Pet[];
};

type Pet = {
  _id: string;
  name: string;
  species: string;
  age: number;
  description: string;
  image: string;
  gender: string;
  dateAddedToSite: string;
  fee: number;
  image: string;
  town: string;
  zip: string;
  totalPetsResults: number;
};

type CartPet = {
  _id: string;
  name: string;
  species: string;
  image: string;
  gender: string;
  fee: number;
  image: string;
};

type PetErrorType = {
  status: number;
  data: { message: string };
  message: string;
};
