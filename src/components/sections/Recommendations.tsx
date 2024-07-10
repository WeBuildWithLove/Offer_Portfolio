import SmallBtn from "../ui/btns/SmallBtn";
import {
  RecommendationCard,
  RecommendationCardTwo,
} from "../ui/cards/RecommendationCard";
import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import Marquee from "react-fast-marquee";

const Recommendations = () => {
  return (
    <section className="max-w-full ">
      <div className="flex flex-col gap-5 text-center items-center justify-center mx-auto">
        <MainTitle
          title="Client Review"
          className=" text-[45px] font-semibold"
        />

        <Content
          title="See what others are saying"
          className="text-lg font-normal"
        />
      </div>
      <div className="flex gap-7 flex-col my-16">
        <Marquee autoFill pauseOnClick pauseOnHover className="flex gap-7">
          <RecommendationCard />
        </Marquee>
        <Marquee
          autoFill
          pauseOnClick
          pauseOnHover
          direction="right"
          className="flex gap-3"
        >
          <RecommendationCardTwo />
        </Marquee>
      </div>
      <div className="flex flex-col justify-center items-center">
        <SmallBtn
          label="View Source"
          className="w-[295px] text-xl font-medium "
        />
      </div>
    </section>
  );
};

export default Recommendations;
