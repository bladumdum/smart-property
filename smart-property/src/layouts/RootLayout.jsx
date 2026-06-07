import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout() {
  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" sticky top-0 z-50 backdrop-blur-md bg-bg-secondary/70 h-18 flex items-center">
        <div className=" flex justify-between container-center w-full px-10">
          <Link to={"/"}>Logo</Link>
          <Navbar />
        </div>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
