import FullBtn from "../ui/btns/FullBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import ShowcaseCard from "../ui/cards/ShowcaseCard";
import Content from "../ui/Headers.tsx/Content";
import MainTitle from "../ui/Headers.tsx/MainTitle";

const Showcase = () => {
  return (
    <section className="w-full px-[6%] py-[8rem]">
      <div className="flex flex-col gap-8 text-center max-w-[1150px] items-center justify-center mx-auto">
        <MainTitle
          title="To become a thought leader faster, you need to look like one."
          className=" text-4xl font-bold"
        />

        <Content
          title="Say a friend invited you for an event, convinced you to come if not for anything but for a keynote speaker that was invited."
          className="text-lg font-normal"
        />
        <Content
          title="He said so much about this speaker that you were hyped up and ready to meet him, on the D-Day you saw the keynote speaker but he wasn't properly dressed, he didn't even look attractive, what comes to your mind first after this? he isn't worth the hype."
          className="text-lg font-normal"
        />
        <Content
          title="He might have great and impactful words but the first impression matters. You might have great contents, if you don't brand right your audience won't give you the respect you deserve as a thought leader."
          className="text-lg font-normal"
        />
        <div className="flex gap-3">
          <FullBtn label="Book Free Call Now" />
          <TransparentBtn
            label="See Price"
            className="text-white text-lg font-medium border-[#0D7297] w-[208px] py-7 "
          />
        </div>
      </div>
      <div className="my-16">
        <ShowcaseCard />
      </div>
    </section>
  );
};

export default Showcase;
