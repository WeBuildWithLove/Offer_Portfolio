import { FC } from "react";
import Content from "../Headers.tsx/Content";

interface ReviewCardProps {
  src: string;
  name: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ src, name }) => {
  return (
    <div className="card-content relative h-[354px] p-3 max-w-[322px]">
      <div className="flex flex-col gap-8  bg-[#0B0F2B] mt-5 w-[262px] ">
        <Content
          title="Daniel helped me freshen up my linkedln banner and now i feel it breathes and is more impactful."
          className="text-sm font-medium leading-[25.76px]"
        />
        <Content
          title="He literally had it wrapped up after the 3rd revision! I would recommend Daniel’s graphic service"
          className="text-sm font-medium leading-[25.76px]"
        />
      </div>
      <div className="flex gap-1 items-center mt-10">
        <img src={src} alt="reviewer photo" />
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
