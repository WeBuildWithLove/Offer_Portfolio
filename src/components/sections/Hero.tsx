import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ProfilePhoto1 from "../../assets/Photo1.jpeg";
import ProfilePhoto2 from "../../assets/Photo2.jpeg";
import ImageCard from "../ui/cards/ImageCard";
import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";

const Hero = () => {
  return (
    <section className="max-w-full md:py-[6rem] py-8 lg:px-[8%] px-[5%]  ">
      <h1>TESTING</h1>
      <div className="flex justify-center items-center md:flex-nowrap flex-wrap lg:gap-20 gap-8">
        <div className="flex flex-col max-w-[600px] gap-6">
          <TransparentBtn
            label="Go from regular to Oversubscribed"
            className="max-w-[295px] border-blue-color text-blue-color py-7 cursor-default max-h-[52px]"
          />
          <MainTitle
            title="Attract your Dream Clients with Quality Branding"
            className=" opacity-[1] font-bold text-[28px] lg:text-[40px] lg:leading-[55.8px] leading-[37.2px]  "
          />
          <Content
            className=" font-normal text-sm lg:text-xl leading-[20.39px] lg:leading-8 opacity-[0.8]  max-w-[500px]"
            title="Build an Oversubscribed Coaching Business with bespoke, Premium branding and positioning Strategy."
          />
          <FullBtn label="Book a Free Call Now" className="" />
        </div>
        <div className="flex items-center gap-4 ">
          <ImageCard src={ProfilePhoto1} className="" nickname="Agba chef" />

          <div className=" mt-20 rotate-[16.86deg] translate-x-[-20px] ">
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
