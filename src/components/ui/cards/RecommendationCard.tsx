import { reviewData, reviewDataTwo } from "../../../constant/datamanager";
import Content from "../Headers.tsx/Content";
import MainTitle from "../Headers.tsx/MainTitle";

export const RecommendationCard = () => {
  return (
    <div className="flex gap-7">
      {reviewData.map((item, index) => (
        <div key={index} className="card-border p-[6px] rounded-3xl">
          <div className="flex flex-col gap-4 glass_container ">
            <div className="flex gap-1 mt-5">
              <img
                src={item.src}
                alt="reviewer photo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <MainTitle
                  title={item.name}
                  className="text-[17.17px] font-medium"
                />
                <Content
                  title={item.date}
                  className="text-[12px] font-normal opacity-[0.4]"
                />
              </div>
            </div>
            <Content
              title={item.description}
              className="max-w-[417px] text-base font-normal text-[#B5B5B5] pb-7 leading-7"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const RecommendationCardTwo = () => {
  return (
    <div className="flex gap-7">
      {reviewDataTwo.map((item, index) => (
        <div key={index} className="card-border p-[6px] rounded-3xl">
          <div className="flex flex-col gap-4 glass_container  ">
            <div className="flex gap-1 mt-5">
              <img
                src={item.src}
                alt="reviewer photo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <MainTitle
                  title={item.name}
                  className="text-[17.17px] font-medium"
                />
                <Content
                  title={item.date}
                  className="text-[12px] font-normal opacity-[0.4]"
                />
              </div>
            </div>
            <Content
              title={item.description}
              className="max-w-[417px] text-base font-normal text-[#B5B5B5] pb-7 leading-7"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
