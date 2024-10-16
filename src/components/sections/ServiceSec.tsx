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
import ListTwo from "../ui/Headers.tsx/ListTwo";
// import ListThree from "../ui/Headers.tsx/ListThree";

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

const ServiceSec: React.FC = () => {
  return (
    <section className="max-w-full  md:py-[6rem] py-[4rem] lg:px-[8%] px-[4%]">
      <div className="flex flex-col gap-10 text-center items-center justify-center mx-auto">
        <div className="max-w-[825px]">
          <TransparentBtn
            label="Services"
            className="w-[239px] border-blue-color text-blue-color h-[52px] cursor-default"
          />
          <MainTitle
            title="Here is How We will Get you Oversubscribed in 90 Days"
            className="text-[25px] leading-[31px] lg:leading-normal lg:text-[45px] font-semibold py-5 lg:py-2"
          />
          <Content
            title="We will be working together for the next 12 weeks, here are the different phases we will work through to create a Quality and Oversubscribed Brand for you."
            className="lg:text-lg text-base"
          />
        </div>
        <div className="flex gap-3 mt-5 flex-wrap items-center justify-center md:flex-nowrap">
          <div className="flex flex-col w-full ">
            <PhaseContent
              phase="Phase 1"
              title="Understanding your UVP & USP"
              subtitle="This initial phase is crucial. We will."
              className=""
            >
              <ListTwo />
            </PhaseContent>

            <div className="md:block flex-1 flex-grow hidden">
              <PhaseContent
                phase="Phase 3"
                title=" Content Strategy & Collaterals"
                subtitle="Top notch content is not just only about what you say, but How you say it and the medium you use to pass it across is even more important. So I will develop a personalized content strategy based on your unique positioning and stories and create collaterals for you to make your content premium and ensure you get the results you want from them.."
                className="pb-3"
              >
                <SpanContent className="px-4">
                  <p className="text-[19px] font-semibold py-2">
                    Here is what we will do
                  </p>
                  <p>
                    <span className="font-semibold">
                      Unearthing Your Story Bank:
                    </span>{" "}
                    I will guide you through exercises to uncover your personal
                    and professional stories that resonate with your audience.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Aligning Content with USP:
                    </span>{" "}
                    I will help you identify content themes and topics directly
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
                  <p>
                    <span className="font-semibold">
                      Create Templated Collaterals:
                    </span>{" "}
                    I will create, visually appealing Carousel, Cheat Sheets and
                    One Pager Templates we can use to put out content for you
                    which will attract and keep the attention of your Target
                    Audience and help to convert them.
                  </p>
                </SpanContent>
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
                title=" Complete Rebranding across all Channels"
                subtitle="With your UVP and USP in hand, the next step is to transform your Brand & Linkedin Profile into a Client Magnet. "
              >
                <List />
              </PhaseContent>
            </div>

            <div className="md:hidden flex-1 flex-grow block ">
              <PhaseContent
                phase="Phase 3"
                title="Content Strategy Mastery"
                subtitle="It's not just about what you say, it's about how you say it. The Thought Leader Accelerator helps you develop a personalized content strategy based on your unique positioning and stories."
                className=""
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
              <PricingCard title="The Irresistible Transformation">
                {/* <ListThree /> */}
                <SpanContent className="px-4 pb-6">
                  <p>
                    We don't just want to help you get more likes and comments.
                    We want to help you manifest your Dream Brand and
                    continuously sell out your Offer.
                  </p>
                  <p>
                    With a Quality Brand, with a Quality Profile and an
                    Effective Content Strategy
                  </p>
                  <p>
                    You'll transform from a hidden gem to a recognized Thought
                    Leader getting all the acknowledgment in your Industry and
                    get the High-paying clients you deserve.
                  </p>
                  <p className="text-[19px] font-semibold py-2">
                    Ready to get started?
                  </p>
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

export default ServiceSec;
