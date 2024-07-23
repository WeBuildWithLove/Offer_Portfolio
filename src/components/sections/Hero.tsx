import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ProfilePhoto1 from "../../assets/Photo1.svg";
import ProfilePhoto2 from "../../assets/Photo2.jpeg";
import ImageCard from "../ui/cards/ImageCard";
import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";

const Hero = () => {
  return (
    <section className="max-w-full md:py-[8rem] py-8 lg:px-[8%] px-[5%]  ">
      <div className="flex justify-center items-center md:flex-nowrap flex-wrap gap-8 lg:gap-2">
        <div className="flex flex-col max-w-[660px] gap-8">
          <TransparentBtn
            label="Go from regular to thoughtleader"
            className="max-w-[295px] border-blue-color text-blue-color py-7 cursor-default max-h-[52px]"
          />
          <MainTitle
            title="Become a trusted and recognized thought leader"
            className=" opacity-[1] font-bold text-[30px] lg:text-[45px] lg:leading-[55.8px] leading-[37.2px] "
          />
          <Content
            className=" font-normal text-sm lg:text-xl leading-[17.39px] lg:leading-6 opacity-[0.8]  max-w-[500px]"
            title="Together we can craft a long-term bespoke thought leadership positioning strategy so you attract premium client."
          />
          <FullBtn label="Book Free Call Now" className="" />
        </div>
        <div className="flex items-center gap-4 ">
          <ImageCard src={ProfilePhoto1} className="" nickname="Agba chef" />

          <div className=" mt-20 rotate-[16.86deg] ">
            <ImageCard
              src={ProfilePhoto2}
              className="w-full "
              nickname="The blue guy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
