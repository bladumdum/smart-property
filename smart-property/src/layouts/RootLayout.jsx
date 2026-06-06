import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function RootLayout() {
  const pages = ["Home", "Prediction", "History"];
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" bg-bg-secondary h-18 flex items-center">
        <div className=" flex justify-between container-center w-full">
          <h1>logo</h1>
          <Navbar />
        </div>
      </header>
      <main className="container-center flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
