import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="page-content container py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
