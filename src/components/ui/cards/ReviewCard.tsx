import { FC } from "react";
import Content from "../Headers.tsx/Content";

interface ReviewCardProps {
  src: string;
  name: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ src, name }) => {
  return (
    <div className="card-content relative p-3 max-w-[322px] w-full">
      <div className="flex flex-col gap-8 bg-[#0B0F2B] mt-5 p-1 ">
        <Content
          title="Daniel helped me freshen up my LinkedIn banner and now I feel it breathes and is more impactful."
          className="lg:text-sm font-medium lg:leading-[25.76px] text-[10.2px] leading-[18.77px]"
        />
        <Content
          title="He literally had it wrapped up after the 3rd revision! I would recommend Daniel’s graphic service"
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
