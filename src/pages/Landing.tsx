import Guide from "../components/sections/Guide";
import Hero from "../components/sections/Hero";
import Recommendations from "../components/sections/Recommendations";
import Showcase from "../components/sections/Showcase";

const Landing = () => {
  return (
    <main className=" font-CabinetGrotesk ">
      <Hero />
      <Guide />
      <Showcase />
      <Recommendations />
    </main>
  );
};

export default Landing;
