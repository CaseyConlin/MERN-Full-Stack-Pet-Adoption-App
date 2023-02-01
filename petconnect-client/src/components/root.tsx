import { Outlet } from "react-router-dom";
import { Navbar } from "./navBar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
