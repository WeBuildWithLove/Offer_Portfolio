// /ui/cards/ReviewCard.tsx
import { FC } from "react";
import Content from "../Headers.tsx/Content";

interface ReviewCardProps {
  src: string;
  name: string;
  title1: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ src, name, title1 }) => {
  return (
    <div className="card-content relative p-3 w-full max-w-xs">
      {" "}
      {/* Added max-w-xs for consistent width */}
      <div className="flex flex-col gap-8 bg-[#0B0F2B] mt-5 p-1">
        <Content
          title={title1}
          className="lg:text-sm font-medium lg:leading-[25.76px] text-[10.2px] leading-[18.77px]"
        />
      </div>
      <div className="flex gap-1 items-center lg:my-10 my-4">
        <img src={src} alt="reviewer photo" width={30} height={30} />
        <h5 className="lg:text-[17.17px] text-[12.52px]">{name}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
