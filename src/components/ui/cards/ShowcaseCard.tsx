// import Content from "../Headers.tsx/Content";
import { showcaseData } from "../../../constant/datamanager";

const ShowcaseCard = () => {
  return (
    <div className="flex justify-center lg:scale-90 md:scale-95 my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-full h-auto">
        {showcaseData.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="p-1 card-border md:col-span-1 flex flex-col justify-center items-center mx-auto rounded-xl"
          >
            <div className="flex flex-col gap-2 glass_container w-full h-full">
              <img
                src={item.src}
                alt="Banner image showcase"
                className="w-full h-full object-cover"
              />
              {/* <Content
                title={item.description}
                className="text-base leading-6 font-normal py-10"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCard;
