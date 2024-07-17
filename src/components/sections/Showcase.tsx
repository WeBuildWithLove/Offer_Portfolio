import { Link } from "react-router-dom";
import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import ShowcaseCard from "../ui/cards/ShowcaseCard";
import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";

const Showcase = () => {
  return (
    <section className="w-full px-[5%] py-[6rem]">
      <div className="flex flex-col gap-7 text-center max-w-[1150px] items-center justify-center mx-auto mt-6 lg:mt-0">
        <MainTitle
          title="To become a thought leader faster, you need to look like one."
          className=" lg:text-4xl text-3xl leading-[37.2px] font-bold"
        />
        <div className="lg:text-lg font-normal text-sm lg:leading-6 leading-[22.33px] flex flex-col gap-7">
          <Content
            title="Say a friend invited you for an event, convinced you to come if not for anything but for a keynote speaker that was invited."
            className=""
          />
          <Content
            title="He said so much about this speaker that you were hyped up and ready to meet him, on the D-Day you saw the keynote speaker but he wasn't properly dressed, he didn't even look attractive, what comes to your mind first after this? he isn't worth the hype."
            className=""
          />
          <Content
            title="He might have great and impactful words but the first impression matters. You might have great contents, if you don't brand right your audience won't give you the respect you deserve as a thought leader."
            className=""
          />
        </div>
        <div className="flex lg:gap-3 gap-1 scale-75 md:scale-100">
          <FullBtn label="Book Free Call Now" />
          <Link to="/pricing">
            <TransparentBtn
              label="See Price"
              className="text-white text-lg font-medium border-[#0D7297] md:w-[208px] py-7 w-[161px]"
            />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <ShowcaseCard />
      </div>
    </section>
  );
};

export default Showcase;
