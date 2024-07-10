import { FC } from "react";
import { Button } from "../button";

interface SmallBtnProps {
  label: string;
  className?: string;
}

const SmallBtn: FC<SmallBtnProps> = ({ label, className }) => {
  return (
    <Button className={`w-[190px] py-6 rounded-full text-[16.96] ${className}`}>
      {label}
    </Button>
  );
};

export default SmallBtn;
