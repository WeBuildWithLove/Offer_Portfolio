import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

const Landing = lazy(() => import("./pages/Landing"));
const Pricing = lazy(() => import("./pages/Pricing"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingOverlay />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
