import { FC, ReactNode } from "react";
import Content from "../Headers.tsx/Content";
import MainTitle from "../Headers.tsx/MainTitle";
interface PricingCardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  children,
  subtitle,
  className,
}) => {
  return (
    <div className="flex gap-7">
      <div className="card-border p-[5px]   ">
        <div className="flex flex-col gap-4 glass_container items-center">
          <MainTitle
            title={title}
            className=" text-base lg:text-2xl font-semibold pt-10"
          />
          <Content
            title={subtitle}
            className=" text-sm lg:text-lg font-normal leading-[23.84px] lg:leading-9 max-w-[507px]"
          />
          <div className={`${className} flex flex-col text-start`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
