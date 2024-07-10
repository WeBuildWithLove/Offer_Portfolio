import Navbar from "../components/layouts/Navbar";
import Guide from "../components/sections/Guide";
import Hero from "../components/sections/Hero";

const Landing = () => {
  return (
    <main className=" font-CabinetGrotesk bg-[15BFFD]">
      <Navbar />
      <Hero />
      <Guide />
    </main>
  );
};

export default Landing;
