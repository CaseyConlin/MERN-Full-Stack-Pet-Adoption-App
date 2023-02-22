import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from "./components/root";
import { Homepage } from "./components/homepage";
import { PetSearchPage } from "./components/petSearchPage";
import { PetPage } from "./components/petPage";
import { ErrorPage } from "./components/error";
import { AuthLayout } from "./context/userContext/AuthLayout";
import { RegisterForm } from "./components/registerForm";
import { LoginFrom } from "./components/loginForm";
import { MyAccount } from "./components/myAccount";
import { CartPage } from "./components/cartPage";
import { CheckoutPage } from "./components/checkoutPage";
import { About } from "./components/about";
import { fetchPets as petsLoader, fetchPet as petLoader } from "./services/api";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets" element={<PetSearchPage />} loader={petsLoader} />
        <Route path="/pet/:id" element={<PetPage />} loader={petLoader} />
        <Route path="/users/register" element={<RegisterForm />} />
        <Route path="/users/login" element={<LoginFrom />} />
        <Route path="/users/my-account" element={<MyAccount />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
