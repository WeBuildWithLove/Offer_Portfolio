import ShowcaseCard from "../ui/cards/ShowcaseCard";
import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import SmallBtn from "../ui/btns/SmallBtn";

const Showcase = () => {
  return (
    <section className="w-full px-[5%] py-[4rem]">
      <div className="flex flex-col gap-7 text-center max-w-[1150px] items-center justify-center mx-auto mt-6 lg:mt-0">
        <MainTitle
          title="To become Oversubscribed through your branding.."
          className=" lg:text-3xl text-[28.88px] leading-[35.81px] lg:[50.64px] font-bold"
        />
        <div className="lg:text-lg font-normal text-[14.44px]  lg:leading-8 leading-[24.25px] flex flex-col gap-7 justify-center">
          <Content
            title="Your brand needs to be built on Expertise, Professionalism, Exquisiteness, Authority. First, we'll go deep into your Branding foundations and set up the 4 pillars for you, Secondly, we'll create a content strategy for you that ensures the message you communicate with visuals aligns with your Target audience by doing these, Thirdly, I will ensure you get Quality Branding and continually produce Quality Work for you. See more about how we can work together"
            className=""
          />
          {/* <Content
            title="Imagine dream clients reach out to you, ready to invest in your premium services because they see you as the go-to expert in your niche."
            className=""
          /> */}
          {/* <Content
            title="The Thought Leader Accelerator™ is your fast-track to achieving exactly that."
            className=" font-bold "
          /> */}
        </div>
        {/* <div className="flex lg:gap-3 gap-1 scale-75 md:scale-100">
          <FullBtn label="Book Free Call Now" />
          <Link to="/pricing">
            <TransparentBtn
              label="See Price"
              className="text-white text-lg font-medium border-[#0D7297] md:w-[208px] py-7 w-[161px]"
            />
          </Link>
        </div> */}
      </div>

      <div className="w-full mt-16 flex flex-col justify-center items-center">
        <MainTitle
          title="My Recent Projects"
          className=" lg:text-3xl text-2xl leading-[37.2px] font-bold"
        />
        <ShowcaseCard />
      </div>
      <a
        href="https://www.behance.net/gallery/192388895/LinkedIn-Banner-Design"
        target="_blank"
        rel="noopener noreferrer"
        className=" flex flex-col justify-center items-center"
      >
        <SmallBtn
          label="View More"
          className="text-xl font-medium cursor-pointer hover:to-color-end/80 "
        />
      </a>
    </section>
  );
};

export default Showcase;
