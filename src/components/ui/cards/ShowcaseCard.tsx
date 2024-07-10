import Content from "../Headers.tsx/Content";
import { showcaseData } from "../../../constant/datamanager";

const ShowcaseCard = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-full h-auto grid-rows-[1fr_1fr]">
        {showcaseData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className={`p-4 glass_container ${
              index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
            } flex flex-col justify-center items-center mx-auto rounded-xl`}
          >
            <img
              src={item.src}
              alt="Banner image showcase"
              className="w-full h-full"
            />
            <Content
              title={item.description}
              className="text-base leading-6 font-normal"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCard;
