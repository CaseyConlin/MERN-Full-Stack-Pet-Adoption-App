import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/root";
import { Homepage } from "./components/homepage";
import { PetSearchPage } from "./components/petSearchPage";
import { PetPage } from "./components/petPage";
import { ErrorPage } from "./components/error";
import { RegisterForm } from "./components/registerForm";
import { LoginFrom } from "./components/loginForm";
import { MyAccount } from "./components/myAccount";
import { fetchPets as petsLoader, fetchPet as petLoader } from "./services/api";
import { ProtectedRoute } from "./components/protectedRoute";

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
        { path: "/users/register", element: <RegisterForm /> },
        { path: "/users/login", element: <LoginFrom /> },
        { path: "/users/my-account", element: <MyAccount /> },

        // {
        //   path: "/users/my-account",
        //   element: (
        //     <ProtectedRoute>
        //       <MyAccount />
        //     </ProtectedRoute>
        //   ),
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
