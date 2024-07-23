import AccordionSec from "../components/layouts/AccordionSec";
import Guide from "../components/sections/Guide";
import Hero from "../components/sections/Hero";
import Recommendations from "../components/sections/Recommendations";
import Showcase from "../components/sections/Showcase";

const Landing = () => {
  return (
    <main className=" font-Poppins overflow-y-hidden">
      <Hero />
      <Guide />
      <Showcase />
      <Recommendations />
      <AccordionSec />
    </main>
  );
};

export default Landing;
