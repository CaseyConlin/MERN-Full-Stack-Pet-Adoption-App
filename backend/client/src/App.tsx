import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/root";
import { Homepage } from "./components/homepage";
import { PetSearchPage } from "./components/petSearchPage";
import { PetPage } from "./components/petPage";
import { ErrorPage } from "./components/error";
import { fetchPets as petsLoader, fetchPet as petLoader } from "./services/api";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/", element: <Homepage /> },
        { path: "/pets", element: <PetSearchPage />, loader: petsLoader },
        { path: "/pet/:id", element: <PetPage />, loader: petLoader },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
