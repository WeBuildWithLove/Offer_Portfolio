import { FC } from "react";

interface TitleProps {
  title?: string;
  className?: string;
}

const Content: FC<TitleProps> = ({ title, className }) => {
  return <p className={`${className}`}>{title}</p>;
};

export default Content;
