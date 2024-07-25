import { Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import FullBtn from "../ui/btns/FullBtn";
import MainTitle from "../ui/Headers.tsx/MainTitle";

const Footer = () => {
  return (
    <footer className="max-w-full px-[5%] pb-[8rem]">
      <div className="flex flex-col gap-8 text-center items-center justify-center mx-auto  max-w-[650px]">
        <MainTitle
          title="Ready to grow your personal brand?"
          className="lg:text-[45px] lg:leading-[64px]  leading-[44px] font-semibold text-[30px] text-center"
        />
        <FullBtn label="Book a Free Call Now" />
        <div className="flex gap-8">
          {" "}
          <a
            href="https://www.linkedin.com/in/danielararomiprofileoptimizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28.4} />
          </a>
          <a
            href="https://www.instagram.com/real_daniel_araromi?igsh=MXFqejd3bGo4bWEyMQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={28.4} />
          </a>
          <a href={`mailto:dararomi10@gmail.com`}>
            <Mail size={28.4} />
          </a>
          <a href="tel:+2348113211512">
            <PhoneCall size={28.4} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
