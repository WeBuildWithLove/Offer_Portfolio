import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ProfilePhoto1 from "../../assets/Photo1.svg";
// import ProfilePhoto2 from "../../assets/Photo2.svg";
import ImageCard from "../ui/cards/ImageCard";
import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";

const Hero = () => {
  return (
    <section className="max-w-full flex py-[8rem] px-[8%] ">
      <div className="flex flex-col max-w-[660px] gap-8">
        <TransparentBtn
          label=" Go from expert to thought leader"
          className="max-w-[295px] border-blue-color text-blue-color py-7 "
        />
        <MainTitle
          title="Become a trusted and recognized thought leader"
          className=" opacity-[1] font-bold text-[45px] leading-[55.8px] "
        />
        <Content
          className=" font-normal text-xl leading-6 opacity-[0.8]  max-w-[500px]"
          title="Together we can craft a long-term thought leadership strategy on content creation and branding."
        />
        <FullBtn label="Book Free Call Now" />
      </div>
      <div className="flex items-center  gap-4">
        <ImageCard src={ProfilePhoto1} className="" nickname="Agba chef" />

        <div className=" mt-20 rotate-[16.86deg] ">
          <ImageCard
            src={ProfilePhoto1}
            className="w-full "
            nickname="The blue guy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
