import AccordionSec from "../components/layouts/AccordionSec";
import ServiceSec from "../components/sections/ServiceSec";

const Services = () => {
  return (
    <main className=" font-Poppins overflow-clip">
      <ServiceSec />
      <div className=" translate-y-[-80px]">
        <AccordionSec />
      </div>
    </main>
  );
};

export default Services;
