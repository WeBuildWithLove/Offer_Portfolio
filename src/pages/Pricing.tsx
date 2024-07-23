import AccordionSec from "../components/layouts/AccordionSec";
import PriceSec from "../components/sections/PriceSec";

const Pricing = () => {
  return (
    <main className=" font-Poppins overflow-clip">
      <PriceSec />
      <div className=" translate-y-[-80px]">
        <AccordionSec />
      </div>
    </main>
  );
};

export default Pricing;
