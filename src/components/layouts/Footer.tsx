import { Facebook, Instagram, Linkedin } from "lucide-react";
import FullBtn from "../ui/btns/FullBtn";
import MainTitle from "../ui/Headers.tsx/MainTitle";

const Footer = () => {
  return (
    <footer className="max-w-full px-[5%] pb-[8rem]">
      <div className="flex flex-col gap-8 text-center items-center justify-center mx-auto">
        <MainTitle
          title="Ready to grow your personal brand?"
          className="text-[45px] leading-[64px] font-semibold"
        />
        <FullBtn label="Book Free Call Now" />
        <div className="flex gap-8">
          <Linkedin size={28.4} />
          <Instagram size={28.4} />
          <Facebook size={28.4} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
