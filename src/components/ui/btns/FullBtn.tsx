import { CalendarCheck } from "lucide-react";
import { Button } from "../button";
import { FC } from "react";

interface FullBtnProps {
  label: string;
  className?: string;
}

const FullBtn: FC<FullBtnProps> = ({ label, className }) => {
  return (
    <div>
      <a
        href="https://calendly.com/hisexcellencynaija/thoughtleaderacc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className={`w-[295px] py-7  rounded-full text-xl font-normal ${className}`}
        >
          <span className="flex gap-2 items-center">
            {label} <CalendarCheck size={22} />
          </span>
        </Button>
      </a>
    </div>
  );
};

export default FullBtn;
