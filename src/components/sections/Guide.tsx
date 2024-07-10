import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ProfilePhoto from "../../assets/PhotoIcon.svg";
import ReviewCard from "../ui/cards/ReviewCard";
import FullBtn from "../ui/btns/FullBtn";

import TransparentBtn from "../ui/btns/TransparentBtn";

const Guide = () => {
  return (
    <section className="max-w-full px-[2%]  ">
      <div className=" glass_container justify-evenly flex py-16">
        <div className="flex">
          <ReviewCard src={ProfilePhoto} name="John Doe" />
          <div className=" translate-y-[200px] translate-x-[-30px]">
            <ReviewCard src={ProfilePhoto} name="Jane Doe" />
          </div>
        </div>

        <div className="flex flex-col max-w-[612px] gap-6">
          <MainTitle
            title="To be a thought leader, your voice needs to be heard"
            className="text-4xl font-bold opacity-[1]"
          />
          <div className="text-[18px] font-normal flex flex-col gap-6">
            <Content
              title="Is your current mission to grow a tribe that shares your philosophy and to become a thought leader whether for the profit or solely for sharing your personal experience and knowledge of your niche?"
              className=""
            />
            <Content
              title="Does writing about what you know feels very fulfilling but a bit demotivating to have close to no comments, likes, shares or the like even though you share to multiple groups on LinkedIn?"
              className=""
            />
            <Content
              title="I was once in your shoes, I wrote great contents about branding and got crickets, but it changed after I got someone to put me through how content creation works."
              className=""
            />
            <Content
              title="Now, I don't just get the likes, comment, shares etc. I have built a branded trusted by several thousands of people, that share my philosophy about branding and thought leadership."
              className=""
            />
            <Content
              title="You need someone to guide you through it too, Want to build a brand everyone wants to listen to?"
              className=""
            />
            <div className="flex gap-3">
              <FullBtn label="Book Free Call Now" />
              <TransparentBtn
                label="See Price"
                className="text-white text-lg font-medium border-[#0D7297] w-[208px] py-7 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
