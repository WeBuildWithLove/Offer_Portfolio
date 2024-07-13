import { FC } from "react";

interface ImageCardProps {
  src: string;
  className?: string;
  nickname: string;
}

const ImageCard: FC<ImageCardProps> = ({ src, className, nickname }) => {
  return (
    <div className={` w-[260px] h-[379px]`}>
      <div className="card-content relative w-full h-full bg-[#0B0F2B] p-3">
        <img
          src={src}
          alt="Daniel photo"
          className={` h-[70%] w-full object-cover rounded-[10px]  ${className}`}
        />
        <div className="flex flex-col items-start mt-4 text-white">
          <h4 className="text-xl font-bold">{nickname}</h4>
          <div className="flex items-center mt-2 gap-1">
            <span className="rounded-full w-[22.26px] h-[22.26px] bg-[#D9D9D9]"></span>
            <h5>Daniel Araromi</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
