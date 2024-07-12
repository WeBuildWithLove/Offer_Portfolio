import { FC } from "react";

interface TitleProps {
  title?: string;
  className: string;
}

const MainTitle: FC<TitleProps> = ({ title, className }) => {
  return <h2 className={`${className}`}>{title}</h2>;
};

export default MainTitle;
