import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from "./components/root";
import { Homepage } from "./components/homepage";
import { PetSearchPage } from "./components/petSearch/petSearchPage";
import { PetPage } from "./components/petSearch/petPage";
import { ErrorPage } from "./components/error";
import { AuthLayout } from "./context/userContext/AuthLayout";
import { RegisterForm } from "./components/user/registerForm";
import { LoginFrom } from "./components/user/loginForm";
import { MyAccount } from "./components/user/myAccount";
import { CartPage } from "./components/checkout/cartPage";
import { CheckoutPage } from "./components/checkout/checkoutPage";
import { About } from "./components/about";
import { fetchPets as petsLoader, fetchPet as petLoader } from "./services/api";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Homepage />} loader={petsLoader} />
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
