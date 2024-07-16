import { accordionData } from "../../constant/datamanager";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import MainTitle from "../ui/Headers.tsx/MainTitle";

const AccordionSec = () => {
  return (
    <section className="max-w-full px-[5%] py-[12rem]">
      <div className="flex flex-col gap-5 text-center ">
        <MainTitle title="FAQ" className="text-[45px] font-medium" />
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4 mt-5 "
        >
          {accordionData.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="p-5 glass_container  "
            >
              <AccordionTrigger className="text-xl font-medium px-3 ">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[17px] font-normal leading-10 opacity-[0.7] text-left px-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionSec;
