import { reviewData, reviewDataTwo } from "../../../constant/datamanager";
import Content from "../Headers.tsx/Content";
import MainTitle from "../Headers.tsx/MainTitle";

export const RecommendationCard = () => {
  return (
    <div className="flex gap-7 ">
      {reviewData.map((item, index) => (
        <div
          key={index}
          className="card-border p-[6px] rounded-3xl  lg:w-full lg:h-auto w-[300px] h-[200px]"
        >
          <div className="flex flex-col gap-4 glass_container ">
            <div className="flex gap-1 mt-5 items-center">
              <img
                src={item.src}
                alt="reviewer photo"
                className="rounded-full  max-w-[40px]"
              />
              <div className="flex flex-col">
                <MainTitle
                  title={item.name}
                  className="lg:text-[17.17px] font-medium text-[8.3px]"
                />
                <Content
                  title={item.date}
                  className="lg:text-[12px] font-normal opacity-[0.4] text-[5.8px]"
                />
              </div>
            </div>
            <Content
              title={item.description}
              className="max-w-[417px] w-full text-[7.73px] leading-[13.04px] lg:text-base font-normal text-[#B5B5B5] pb-7 lg:leading-7"
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
        <div
          key={index}
          className="card-border p-[6px] rounded-3xl lg:w-full lg:h-auto w-[300px] h-[200px]"
        >
          <div className="flex flex-col gap-4 glass_container  ">
            <div className="flex gap-1 mt-5  items-center">
              <img
                src={item.src}
                alt="reviewer photo"
                className="rounded-full  max-w-[40px]"
              />
              <div className="flex flex-col">
                <MainTitle
                  title={item.name}
                  className="lg:text-[17.17px] font-medium text-[8.3px]"
                />
                <Content
                  title={item.date}
                  className="lg:text-[12px] font-normal opacity-[0.4] text-[5.8px]"
                />
              </div>
            </div>
            <Content
              title={item.description}
              className="max-w-[417px] w-full text-[7.73px] leading-[13.04px] lg:text-base font-normal text-[#B5B5B5] pb-7 lg:leading-7"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
