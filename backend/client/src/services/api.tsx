import { json } from "react-router-dom";

//Fetch all pets.
export const fetchPets = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const query = window.location.search;
  console.log(query);

  const res = await fetch(`/api/v1/pets${query}`);
  if (!res.ok) {
    throw json({ message: "No pets available." }, { status: 500 });
  }
  return res;
};

export const searchPets = async (query?: string) => {
  const res = await fetch(`/api/v1/pets/${query}`);
  const data = await res.json();
  return data;
};

//Fetch details for one pet.
export const fetchPet = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const id = params.id;
  console.log(id);
  console.log(params);
  console.log(request);
  const res = await fetch(`/api/v1/pets/${id}`);
  console.log(res);

  return res;
};
