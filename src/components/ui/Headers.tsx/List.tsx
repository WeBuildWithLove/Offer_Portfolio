import { BadgeCheck } from "lucide-react";
import { priceListData } from "../../../constant/datamanager";

const List = () => {
  return (
    <div className="flex flex-col gap-5">
      {priceListData.map((item, index) => (
        <div key={index} className="flex gap-4 items-center text-start">
          <BadgeCheck color="#15BFFD" size={20.09} />
          <ul>
            <li className="text-base leading-[26px] font-medium opacity-[0.8] max-w-[489px]">
              {item.list}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;
