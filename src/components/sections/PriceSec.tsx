// File: src/components/PriceSec.tsx

import React from "react";
import SmallBtn from "../ui/btns/SmallBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import PricingCard from "../ui/cards/PricingCard";
import List from "../ui/Headers.tsx/List";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";
import FullBtn from "../ui/btns/FullBtn";
import SpanContent from "../ui/Headers.tsx/SpanContent";
import Content from "../ui/Headers.tsx/Content";

interface PhaseContentProps {
  phase: string;
  title: string;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
}

const PhaseContent: React.FC<PhaseContentProps> = ({
  phase,
  title,
  subtitle,
  children,
  className,
}) => (
  <div className="flex-1">
    <SmallBtn
      label={phase}
      className="z-20 relative top-6 hover:to-color-end/100"
    />
    <PricingCard
      title={title}
      subtitle={subtitle}
      className={`${className} max-w-[507px] md:text-lg text-[13px]`}
    >
      {children}
    </PricingCard>
  </div>
);

const PriceSec: React.FC = () => {
  return (
    <section className="max-w-full  md:py-[6rem] py-[4rem] lg:px-[8%] px-[4%]">
      <div className="flex flex-col gap-10 text-center items-center justify-center mx-auto">
        <div>
          <TransparentBtn
            label="Pricing"
            className="w-[239px] border-blue-color text-blue-color h-[52px] cursor-default"
          />
          <MainTitle
            title="The Thought Leader Accelerator™"
            className="text-[25px] leading-[31px] lg:leading-normal lg:text-[45px] font-semibold py-5 lg:py-2"
          />
          <Content
            title="makes this dream a reality through a proven 3-phase system:"
            className="lg:text-lg text-base"
          />
        </div>
        <div className="flex gap-3 mt-5 flex-wrap items-center justify-center md:flex-nowrap">
          <div className="flex flex-col w-full ">
            <PhaseContent
              phase="Phase 1"
              title="Understanding your UVP & USP"
              subtitle="This core phase is crucial. We'll help you identify your unique value proposition (UVP), what makes you different and irreplaceable, and craft a compelling unique selling proposition (USP) that resonates with your ideal clients."
              className="pb-16"
            >
              {/* <FullBtn
                label="Book a call"
                className="lg:my-14 my-8 flex flex-col justify-center items-center mx-auto"
              /> */}
            </PhaseContent>

            <div className="md:block flex-1 flex-grow hidden">
              <PhaseContent
                phase="Phase 3"
                title="Content Strategy Mastery"
                subtitle="It's not just about what you say, it's about how you say it. The Thought Leader Accelerator helps you develop a personalized content strategy based on your unique positioning and stories."
                className="pb-[100px]"
              >
                <SpanContent className="px-4">
                  <p className="text-[19px] font-semibold py-2">
                    Here is what we will do
                  </p>
                  <p>
                    <span className="font-semibold">
                      Unearthing Your Story Bank:
                    </span>{" "}
                    We'll guide you through exercises to uncover your personal
                    and professional stories that resonate with your audience.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Aligning Content with USP:
                    </span>{" "}
                    We'll help you identify content themes and topics directly
                    tied to your unique selling proposition.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Crafting Engaging Content:
                    </span>{" "}
                    You'll learn storytelling techniques and content formats
                    that captivate your ideal clients and establish you as a
                    thought leader.
                  </p>
                </SpanContent>
                {/* <FullBtn
                  label="Book a call"
                  className="w-[257px] lg:my-14 my-8 flex flex-col justify-center items-center mx-auto"
                /> */}
              </PhaseContent>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex-1 my-5">
              <img
                src={ArrowDown}
                alt="image of an arrow"
                width={94}
                height={94}
                className="hidden lg:block translate-y-7"
              />

              <PhaseContent
                phase="Phase 2"
                title="Power Profile Optimization"
                subtitle="With your UVP and USP in hand, we'll transform your profile into a client magnet. We will:"
              >
                <List />
                {/* <FullBtn
                  label="Book a call"
                  className="w-[257px] lg:my-8 my-6 flex flex-col justify-center items-center mx-auto"
                /> */}
              </PhaseContent>
            </div>

            <div className="md:hidden flex-1 flex-grow block ">
              <PhaseContent
                phase="Phase 3"
                title="Content Strategy Mastery"
                subtitle="It's not just about what you say, it's about how you say it. The Thought Leader Accelerator helps you develop a personalized content strategy based on your unique positioning and stories."
                className="pb-16"
              >
                <SpanContent className="px-4">
                  <p className="text-[19px] font-semibold py-2">
                    Here is what we will do
                  </p>
                  <p>
                    <span className="font-semibold">
                      Unearthing Your Story Bank:
                    </span>{" "}
                    We'll guide you through exercises to uncover your personal
                    and professional stories that resonate with your audience.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Aligning Content with USP:
                    </span>{" "}
                    We'll help you identify content themes and topics directly
                    tied to your unique selling proposition.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Crafting Engaging Content:
                    </span>{" "}
                    You'll learn storytelling techniques and content formats
                    that captivate your ideal clients and establish you as a
                    thought leader.
                  </p>
                </SpanContent>
              </PhaseContent>
            </div>

            <div className="flex-1 md:mt-0 mt-16">
              <PricingCard title="Your Investment">
                <SpanContent className="px-4 pb-6">
                  <p>
                    Starting your journey to Thought Leadership is simple and
                    affordable. The total package costs just
                    <span className="font-semibold"> $275</span>. Choose the
                    payment option that suits you best:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Option 1: Split Payment</li>
                    <ul>
                      <li>
                        Pay <span className="font-semibold">$175</span> upfront
                        to get us started on building your dream brand.
                      </li>
                      <li>
                        Pay the remaining{" "}
                        <span className="font-semibold">$100</span> once you are
                        satisfied with the result.
                      </li>
                    </ul>
                    <li>Option 2: Full Payment Discount</li>
                    <ul>
                      <li>
                        Pay the full amount upfront and enjoy a{" "}
                        <span className="font-semibold">$35</span> discount.
                      </li>
                      <li>
                        Total upfront payment:{" "}
                        <span className="font-semibold">$240</span>.
                      </li>
                    </ul>
                  </ul>
                </SpanContent>
                <FullBtn
                  label="Book a Free Call"
                  className="w-[257px] my-4 flex flex-col justify-center items-center mx-auto"
                />
              </PricingCard>
            </div>
          </div>
        </div>
        <img
          src={ArrowUp}
          alt="image of an arrow"
          className="hidden md:block"
          width={94}
          height={113}
        />
      </div>
    </section>
  );
};

export default PriceSec;
