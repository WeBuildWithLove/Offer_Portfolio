import FullBtn from "../ui/btns/FullBtn";
import SmallBtn from "../ui/btns/SmallBtn";
import TransparentBtn from "../ui/btns/TransparentBtn";
import PricingCard from "../ui/cards/PricingCard";
import Content from "../ui/Headers.tsx/Content";
import List from "../ui/Headers.tsx/List";
import MainTitle from "../ui/Headers.tsx/MainTitle";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";

const Price = () => {
  return (
    <section className="max-w-full flex py-[8rem] px-[8%]">
      <div className="flex flex-col gap-5 text-center items-center justify-center mx-auto">
        <div>
          <TransparentBtn
            label=" pricing"
            className="w-[239px] border-blue-color text-blue-color h-[52px]"
          />
          <MainTitle
            title="Thought leader accelerator program"
            className=" text-[45px] font-semibold"
          />
          <Content
            title="See what others are saying"
            className="text-lg font-normal"
          />
        </div>
        <div className=" flex">
          <div className="flex flex-col  w-full">
            <div className="flex-1">
              <SmallBtn
                label="Phase 1"
                className="w-[235px] z-20 relative top-6"
              />
              <PricingCard
                title="Understanding your UVP & USP"
                subtitle="This core phase is crucial. We'll help you identify your unique value proposition (UVP), what makes you different and irreplaceable, and craft a compelling unique selling proposition (USP) that resonates with your ideal clients."
                children={
                  <FullBtn label="Book a call" className="w-[257px] my-16" />
                }
              />
            </div>

            <div className="flex-1 flex-grow">
              <SmallBtn
                label="Phase 3"
                className="w-[235px] z-20 relative top-6"
              />
              <PricingCard
                title="Power Profile Optimization"
                subtitle="With your UVP and USP in hand, we'll transform your profile into a client magnet."
              >
                <List />
                <FullBtn label="Book a call" className="w-[257px] my-16" />
              </PricingCard>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex-1 mt-10">
              <img src={ArrowDown} alt="image of an arrow" />
              <SmallBtn
                label="Phase 2"
                className="w-[235px] z-20 relative top-6"
              />
              <PricingCard
                title="Power Profile Optimization"
                subtitle="With your UVP and USP in hand, we'll transform your profile into a client magnet."
              >
                <List />
                <FullBtn label="Book a call" className="w-[257px] my-16" />
              </PricingCard>
            </div>
            <div className="flex-1">
              <PricingCard className="pb-16" title="Your Investment">
                {/* <MainTitle title="Your Investment" className="" /> */}
                <p className="text-lg font-normal leading-9 max-w-[507px]">
                  Starting your journey to Thought Leadership is simple and
                  affordable. The total package costs just{" "}
                  <span className=" font-semibold">$275</span>.
                </p>
                <p> Choose the payment option that suits you best:</p>
                <p>Option 1: Split Payment</p>
                <ul className="list-disc list-inside">
                  <li>
                    Pay <span className=" font-semibold">$175</span> upfront to
                    get us started on building your dream brand.
                  </li>
                  <li>
                    Pay the remaining{" "}
                    <span className=" font-semibold">$100</span> once you are
                    satisfied with the results.
                  </li>
                </ul>
                <p className="text-lg font-normal leading-9 max-w-[507px]">
                  Option 2: Full Payment Discount
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Pay the full amount upfront and enjoy a{" "}
                    <span className=" font-semibold">$35</span> discount.
                  </li>
                  <li>
                    Total upfront payment:{" "}
                    <span className=" font-semibold">$240</span>.
                  </li>
                </ul>
              </PricingCard>
            </div>
          </div>
        </div>
        <img
          src={ArrowUp}
          alt="image of an arrow"
          className=" translate-y-[-50px]"
        />
      </div>
    </section>
  );
};

export default Price;
