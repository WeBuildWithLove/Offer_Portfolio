import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import AccordionSec from "./components/layouts/AccordionSec";

const Landing = lazy(() => import("./pages/Landing"));
const Pricing = lazy(() => import("./pages/Pricing"));
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
