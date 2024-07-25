import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Menu from "../../assets/Menu.svg";
import { navLinks } from "../../constant/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import FullBtn from "../ui/btns/FullBtn";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSheetOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center pt-10 lg:px-[8%] px-[4%] w-full ">
      <div className="flex items-center">
        <img src={Logo} alt="logo as photo" className="max-w-[100px]" />
        <div className="flex flex-col">
          <h5 className="text-sm lg:text-xl font-bold m-0">Daniel Araromi</h5>
          <h6 className="text-[10px] lg:text-[11.93px] font-medium opacity-[0.7] m-0">
            The blue guy
          </h6>
        </div>
      </div>
      <div className="lg:flex gap-16 items-center hidden font-medium flex-1 justify-end">
        {navLinks.map((item, index) => (
          <ul key={index} className="flex-none">
            <Link to={item.href}>
              <li className="text-lg">{item.name}</li>
            </Link>
          </ul>
        ))}
        <a
          href="https://calendly.com/hisexcellencynaija/thoughtleaderacc"
          target="_blank"
          rel="noopener noreferrer"
          className="  "
        >
          {" "}
          <Button className="text-[16.96px] font-medium cursor-pointer hover:to-color-end/80 w-[150px] rounded-full">
            Book Now
          </Button>
        </a>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <img
              src={Menu}
              alt="menu bar"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setIsSheetOpen(true)}
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="pt-16 flex flex-col gap-12 bg-[#0B0F2B]"
          >
            {navLinks.map((item, index) => (
              <ul key={index} className="py-2">
                <SheetClose asChild>
                  <Link to={item.href} className="flex gap-5">
                    <li className="text-[15.69px] font-normal">{item.name}</li>
                  </Link>
                </SheetClose>
              </ul>
            ))}
            <div className="pt-4">
              <a
                href="https://calendly.com/hisexcellencynaija/thoughtleaderacc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FullBtn label="Book a Free Call Now" className="" />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
