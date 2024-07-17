import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";

import ReviewCard from "../ui/cards/ReviewCard";
import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import { Link } from "react-router-dom";
import ProfilePhoto2 from "../../assets/Profile10.png";
import ProfilePhoto1 from "../../assets/Profile9.png";

const Guide = () => {
  return (
    <section className="max-w-full glass_container">
      <div className="lg:flex-nowrap flex-wrap items-center flex justify-center gap-2">
        <div className="flex max-w-[531px] lg:mb-0 mb-[15rem]">
          <div>
            <ReviewCard
              src={ProfilePhoto1}
              name="Laura"
              title1="Daniel helped freshen up my LinkedIn banner and now I feel it breathes and is more impactful."
              title2="He literally had it wrapped up after the 3rd revision! I would recommend Daniel’s graphic service"
            />
          </div>
          <div className="relative translate-y-[200px] translate-x-[-70px]">
            <ReviewCard
              src={ProfilePhoto2}
              name="Patrick Olumba"
              title1="I highly recommend Daniel for graphic design. He's an excellent designer who created my flyers and banner."
              title2="is professionalism makes collaborating with him a seamless and enjoyable experience."
            />
          </div>
        </div>

        <div className="flex flex-col max-w-[612px] gap-6 md:py-[100px] py-[50px] order-[-1] lg:order-1">
          <MainTitle
            title="To be a thought leader, your voice needs to be heard"
            className="text-[28.88px] lg:text-4xl font-bold leading-[35.81px] lg:[44.64px]"
          />
          <div className="lg:text-[18px] font-normal flex flex-col gap-6 lg:leading-6 leading-[19.25px] text-[14.44px] opacity-1">
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
          </div>
          <div className="flex gap-3 lg:mt-16 mt-10 flex-wrap justify-center items-center">
            <FullBtn label="Book Free Call Now" />
            <Link to="/pricing">
              <TransparentBtn
                label="See Price"
                className="text-white text-lg font-medium border-[#0D7297] md:w-[208px] py-7 w-[161px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
