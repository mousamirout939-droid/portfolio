import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { useReveal } from "../useReveal.js";

export default function Layout() {
  const { pathname } = useLocation();
  const scopeRef = useReveal([pathname]);

  return (
    <div ref={scopeRef}>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
