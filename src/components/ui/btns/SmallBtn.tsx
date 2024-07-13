import { FC } from "react";
import { Button } from "../button";

interface SmallBtnProps {
  label: string;
  className?: string;
}

const SmallBtn: FC<SmallBtnProps> = ({ label, className }) => {
  return (
    <Button className={`py-6 rounded-full cursor-default ${className}  `}>
      {label}
    </Button>
  );
};

export default SmallBtn;
