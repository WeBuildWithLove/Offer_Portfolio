import SmallBtn from "../ui/btns/SmallBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import PricingCard from "../ui/cards/PricingCard";

import List from "../ui/Headers.tsx/List";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import FullBtn from "../ui/btns/FullBtn";
import SpanContent from "../ui/Headers.tsx/SpanContent";

const PriceSec = () => {
  return (
    <section className="max-w-full flex py-[8rem] ">
      <div className="flex flex-col gap-10 text-center items-center justify-center mx-auto">
        <div className="">
          <TransparentBtn
            label=" pricing"
            className="w-[239px] border-blue-color text-blue-color h-[52px] cursor-default"
          />
          <MainTitle
            title="Thought leader accelerator program"
            className=" text-[45px] font-semibold py-2"
          />
        </div>
        <div className=" flex gap-3 mt-5">
          <div className="flex flex-col w-full">
            <div className="flex-1 ">
              <SmallBtn
                label="Phase 1"
                className="w-[235px] z-20 relative top-6 hover:to-color-end/100 "
              />
              <PricingCard
                title="Understanding your UVP & USP"
                subtitle="This core phase is crucial. We'll help you identify your unique value proposition (UVP), what makes you different and irreplaceable, and craft a compelling unique selling proposition (USP) that resonates with your ideal clients."
                children={
                  <FullBtn
                    label="Book a call"
                    className="w-[257px] my-16 flex flex-col justify-center items-center mx-auto"
                  />
                }
              />
            </div>

            <div className="flex-1 flex-grow">
              <SmallBtn
                label="Phase 3"
                className="w-[235px] z-20 relative top-6 hover:to-color-end/100"
              />
              <PricingCard
                className=""
                title="Content Strategy Mastery"
                subtitle="It's not just about what you say, it's about how you say it. The Thought Leader Accelerator helps you develop a personalized content strategy based on your unique positioning and stories."
              >
                <SpanContent className="px-4">
                  <p className="text-[19px] font-semibold py-2">
                    Here is what we will do
                  </p>
                  <p>
                    <span className=" font-semibold">
                      Unearthing Your Story Bank:
                    </span>{" "}
                    We'll guide you through exercises to uncover your personal
                    and professional stories that resonate with your audience.
                  </p>
                  <p>
                    <span className=" font-semibold">
                      {" "}
                      Aligning Content with USP:{" "}
                    </span>
                    We'll help you identify content themes and topics directly
                    tied to your unique selling proposition.
                  </p>
                  <p>
                    <span className=" font-semibold">
                      Crafting Engaging Content:
                    </span>{" "}
                    You'll learn storytelling techniques and content formats
                    that captivate your ideal clients and establish you as a
                    thought leader.
                  </p>
                </SpanContent>

                <FullBtn
                  label="Book a call"
                  className="w-[257px] my-16 flex flex-col justify-center items-center mx-auto"
                />
              </PricingCard>
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex-1  my-5">
              <img
                src={ArrowDown}
                alt="image of an arrow"
                width={94}
                height={113}
              />
              <SmallBtn
                label="Phase 2"
                className="w-[235px] z-20 relative top-6 hover:to-color-end/100"
              />
              <PricingCard
                title="Power Profile Optimization"
                subtitle="With your UVP and USP in hand, we'll transform your profile into a client magnet."
              >
                <List />
                <FullBtn
                  label="Book a call"
                  className="w-[257px] my-16 flex flex-col justify-center items-center mx-auto"
                />
              </PricingCard>
            </div>
            <div className="flex-1">
              <PricingCard className="" title="Your Investment">
                <SpanContent className="px-4 pb-6">
                  <p>
                    Starting your journey to Thought Leadership is simple and
                    affordable. The total package costs just
                    <span className=" font-semibold"> $275</span>. Choose the
                    payment option that suits you best:
                  </p>

                  <ul className="list-disc list-inside">
                    Option 1: Split Payment
                    <li>
                      Pay <span className=" font-semibold">$175</span> upfront
                      to get us started on building your dream brand.
                    </li>
                    <li>
                      Pay the remaining{" "}
                      <span className=" font-semibold">$100</span> once you are
                      satisfied with the result.
                    </li>
                  </ul>

                  <ul className="list-disc list-inside">
                    Option 2: Full Payment Discount
                    <li>
                      Pay the full amount upfront and enjoy a{" "}
                      <span className=" font-semibold">$35</span> discount.
                    </li>
                    <li>
                      Total upfront payment:{" "}
                      <span className=" font-semibold">$240</span>.
                    </li>
                  </ul>
                </SpanContent>
              </PricingCard>
            </div>
          </div>
        </div>
        <img
          src={ArrowUp}
          alt="image of an arrow"
          className=" "
          width={94}
          height={113}
        />
      </div>
    </section>
  );
};

export default PriceSec;