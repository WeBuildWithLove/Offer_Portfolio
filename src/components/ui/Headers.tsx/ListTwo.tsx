import { BadgeCheck } from "lucide-react";
import { priceList2Data } from "../../../constant/datamanager";

const ListTwo = () => {
  return (
    <div className="flex flex-col gap-5 mb-12">
      {priceList2Data.map((item, index) => (
        <div key={index} className="flex gap-4 items-center text-start">
          <BadgeCheck color="#15BFFD" size={20.09} />
          <ul>
            <li className="md:text-base text-[13px] leading-[26px] font-medium opacity-[0.8] max-w-[489px]">
              {item.list}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListTwo;
