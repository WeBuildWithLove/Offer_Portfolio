import { FC } from "react";
import { Button } from "../button";

interface SmallBtnProps {
  label: string;
  className?: string;
}

const SmallBtn: FC<SmallBtnProps> = ({ label, className }) => {
  return (
    <Button
      className={`py-6 rounded-full cursor-default ${className} w-full max-w-[235px] scale-75 md:scale-100  `}
    >
      {label}
    </Button>
  );
};

export default SmallBtn;
