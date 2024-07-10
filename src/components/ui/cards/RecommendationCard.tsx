import { showcaseData } from "../../../constant/datamanager";
import Content from "../Headers.tsx/Content";

const RecommendationCard = () => {
  return (
    <div className="card-content relative h-[354px] p-3 max-w-[322px]">
      <div className="flex flex-col gap-8  bg-[#0B0F2B] mt-5 w-[262px] ">
        {showcaseData.map((item, index) => (
          <div key={index}>
            <Content
              title={item.description}
              className="text-sm font-medium leading-[25.76px]"
            />

            <img src={item.src} alt="reviewer photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;
