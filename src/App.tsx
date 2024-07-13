import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import AccordionSec from "./components/layouts/AccordionSec";
import { LazyWithDelay } from "./lib/utils";
import Pricing from "./pages/Pricing";

const Landing = LazyWithDelay(() => import("./pages/Landing"), 3000);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <AccordionSec />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
