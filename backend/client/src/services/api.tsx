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

// export const searchPets = async (query?: string) => {
//   const res = await fetch(`/api/v1/pets/${query}`);
//   const data = await res.json();
//   return data;
// };

//Fetch details for one pet.
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

export const loginUser = async (user: User) => {
  const res = await fetch("/users/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  if (res.status !== 200) {
    const data = await res.json();
    // setMessage(undefined);
    // return setErrorMessage(data.message);
    return data.message;
  } else {
    const data = await res.json();
    return data;
    // localStorage.setItem("token", data.token);
    // setErrorMessage(undefined);
    // setMessage(data.message);
    // setTimeout(() => {
    //   navigate("/users/my-account");
    // }, 2000);
  }
};

export const getUser = async () => {
  const res = await fetch("/users/isUserAuth", {
    credentials: "include",
    headers: { "Content-type": "application/json" },
  });
  if (res.status !== 200) {
    const data = await res.json();
    throw new Error(data.message);
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
  return data.success;
};
