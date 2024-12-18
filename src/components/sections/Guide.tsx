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
      <div className="lg:flex-nowrap flex-wrap  flex justify-center  px-[4%]  md:py-[80px] py-[50px] ">
        <div className="lg:flex max-w-[531px] w-full lg:mb-0 mb-[15rem] hidden  ">
          <div className="">
            <ReviewCard
              src={ProfilePhoto1}
              name="Laura"
              title1="Daniel helped freshen up my LinkedIn banner and now I feel it breathes and is more impactful."
            />
          </div>
          <div className="relative translate-y-[200px] translate-x-[-70px]">
            <ReviewCard
              src={ProfilePhoto2}
              name="Patrick Olumba"
              title1="I highly recommend Daniel for graphic design. He's an excellent designer who created my flyers and banner."
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[612px] gap-10 order-[-1] lg:order-1">
          <MainTitle
            title="To become Oversubscribed, your voice needs to be heard"
            className="text-[28.88px] lg:text-3xl font-bold leading-[35.81px] lg:[50.64px]"
          />
          <div className="lg:text-[18px] font-normal flex flex-col gap-8 lg:leading-8 leading-[24.25px] text-[14.44px] opacity-1">
            <Content
              title="Do you spend hours crafting insightful content on LinkedIn, only to be met with crickets? Does your profile blend in with the endless stream of posts, leaving your ideal clients oblivious to the valuable expertise you offer? "
              className=""
            />
            <Content
              title="You're not alone. Countless talented coaches, founders, and solopreneurs struggle to be seen and heard. But what if you could transform from a hidden gem into a recognized authority in your field, attracting high-value clients who are eager to invest in your knowledge?"
              className=""
            />

            <Content
              title="The Oversubscribed in 90 Days™ is your fast-track to achieving exactly that."
              className=" font-bold"
            />
          </div>
          <div className="flex gap-3 lg:mt-16 mt-4 justify-center items-center scale-75 md:scale-100">
            <FullBtn label="Book a Free Call Now" />
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
