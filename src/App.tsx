import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { LazyWithDelay } from "./lib/utils";
import Services from "./pages/Services";

const Landing = LazyWithDelay(() => import("./pages/Landing"), 5000);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/myoffer" element={<Services />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
