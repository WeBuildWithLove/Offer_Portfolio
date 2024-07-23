import { FC, ReactNode } from "react";

interface SpanParagraphProps {
  children?: ReactNode;
  className?: string;
}

const SpanContent: FC<SpanParagraphProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} md:text-lg text-[13px] font-normal md:leading-9 leading-[27.33px] max-w-[507px] flex flex-col gap-4`}
    >
      {children}
    </div>
  );
};

export default SpanContent;
