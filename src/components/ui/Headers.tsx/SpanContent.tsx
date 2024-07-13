import { FC, ReactNode } from "react";

interface SpanParagraphProps {
  children?: ReactNode;
  className?: string;
}

const SpanContent: FC<SpanParagraphProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} text-lg font-normal leading-9 max-w-[507px] flex flex-col gap-4`}
    >
      {children}
    </div>
  );
};

export default SpanContent;
