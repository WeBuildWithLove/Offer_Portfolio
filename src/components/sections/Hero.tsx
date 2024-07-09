import { Button } from "../ui/button";
import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ProfilePhoto1 from "../../assets/Photo1.svg";
import ProfilePhoto2 from "../../assets/Photo2.svg";
import ImageCard from "../ui/cards/ImageCard";

const Hero = () => {
  return (
    <section className="max-w-full flex py-[8rem]">
      <div className="flex flex-col max-w-[660px] gap-8">
        <Button
          className="max-w-[295px] bg-transparent border border-blue-color text-blue-color font-medium rounded-full text-base"
          variant="secondary"
        >
          Go from expert to thought leader
        </Button>
        <MainTitle
          title="Become a trusted and recognized thought leader"
          className=" opacity-[1] font-bold text-[45px] leading-[55.8px] "
        />
        <Content
          className=" font-normal text-xl leading-6 opacity-[0.8]  max-w-[500px]"
          title="Together we can craft a long-term thought leadership strategy on content creation and branding."
        />
        <Button className="max-w-[295px] h-[62px] rounded-full text-xl font-normal">
          Book Free Call Now
        </Button>
      </div>
      <div className="flex items-center  gap-7">
        <ImageCard src={ProfilePhoto1} alt="photo of Daniel" className="" />

        <div className=" mt-20 rotate-12">
          <ImageCard
            src={ProfilePhoto2}
            alt="photo of Daniel"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
