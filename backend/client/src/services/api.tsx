import { json } from "react-router-dom";

//Fetch all pets.
export const fetchPets = async () => {
  const query = window.location.search;
  const res = await fetch(`/api/v1/pets${query}`);
  if (!res.ok) {
    throw json({ message: "No pets available." }, { status: 500 });
  }
  return res;
};

//Fetch one pet.
export const fetchPet = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  const id = params.id;
  const res = await fetch(`/api/v1/pets/${id}`);
  return res;
};

//Authorize users.
export const registerUser = async (user: RegisterUser) => {
  const res = await fetch("/users/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  if (res.status !== 200) {
    const data = await res.json();
    return Promise.reject(data.message);
  } else {
    const data = await res.json();
    return data;
  }
};

export const loginUser = async (user: LoginUser) => {
  const res = await fetch("/users/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  if (res.status !== 200) {
    const data = await res.json();
    return Promise.reject(data.message);
  } else {
    const data = await res.json();
    return data;
  }
};

export const getUser = async () => {
  const res = await fetch("/users/isUserAuth", {
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });
  if (res.status !== 200) {
    const data = await res.json();
    return Promise.reject(data.message);
  }
  const data = await res.json();
  return data;
};

export const logoutUser = async () => {
  const res = await fetch("/users/logout", {
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};
