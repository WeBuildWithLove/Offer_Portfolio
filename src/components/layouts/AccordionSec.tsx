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
    <section className="max-w-full px-[5%] lg:py-[12rem] py-[6rem]">
      <div className="flex flex-col gap-5 text-center ">
        <MainTitle
          title="FAQ"
          className=" text-[30px] lg:text-[45px] font-medium"
        />
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
              <AccordionTrigger className="lg:text-xl text-sm font-medium px-3 leading-[30px]  text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className=" text-[14px] lg:text-[17px] font-normal lg:leading-10 leading-[21px]  opacity-[0.7] text-left px-3">
                {item.answer} lead
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionSec;
