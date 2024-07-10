import Content from "../Headers.tsx/Content";
import { showcaseData } from "../../../constant/datamanager";

const ShowcaseCard = () => {
  return (
    <div className="flex justify-center scale-90">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full h-auto">
        {showcaseData.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className={`p-1 card-border ${
              index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"
            } ${index === 4 ? "md:col-span-1" : ""} ${
              index === 5 ? "md:col-span-2" : ""
            } flex flex-col justify-center items-center mx-auto rounded-xl`}
          >
            <div className="flex flex-col gap-2 glass_container w-full h-full">
              <img
                src={item.src}
                alt="Banner image showcase"
                className="w-full h-full object-cover"
              />
              <Content
                title={item.description}
                className="text-base leading-6 font-normal py-10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCard;
