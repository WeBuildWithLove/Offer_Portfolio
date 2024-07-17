import { FC } from "react";
import { Button } from "../button";

interface TransparentBtnProps {
  label: string;
  className?: string;
}

const TransparentBtn: FC<TransparentBtnProps> = ({ label, className }) => {
  return (
    <Button
      className={`${className} bg-transparent border  font-medium rounded-full text-[14.44px] lg:text-base hover:bg-transparent`}
      variant="secondary"
    >
      {label}
    </Button>
  );
};

export default TransparentBtn;
