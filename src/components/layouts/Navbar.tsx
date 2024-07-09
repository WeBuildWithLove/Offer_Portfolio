import { Link } from "react-router-dom";
import Logo from "../../assets/PhotoIcon.svg";
import { navLinks } from "../../constant/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { BarChartHorizontal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-10 p-4 ">
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          alt="logo as photo"
          width={57.57}
          height={57.57}
          className="rounded-full shadow-custom-shadow"
        />

        <div>
          <h5 className="text-xl font-bold">Daniel Araromi</h5>
          <h6 className="text-[11.93px] font-medium opacity-[0.7]">
            The blue guy
          </h6>
        </div>
      </div>
      <div className="md:flex gap-10 items-center hidden font-medium">
        {navLinks.map((item, index) => (
          <ul key={index}>
            <Link to={item.href}>
              {" "}
              <li className="text-lg">{item.name}</li>
            </Link>
          </ul>
        ))}
        <Button className="w-[190px] h-[52.59px] rounded-full text-[16.96] ">
          Book Now
        </Button>
      </div>
      <div className="flex flex-col md:hidden items-center">
        <Sheet>
          <SheetTrigger>
            <BarChartHorizontal
              size={18}
              strokeWidth={2}
              className=" cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent side="left" className="pt-16 flex flex-col gap-20">
            <div className="flex flex-col gap-12">
              {navLinks.map((item, index) => (
                <ul key={index}>
                  <SheetClose asChild>
                    <Link to={item.href} className="flex gap-5">
                      <li className="text-[15.69px] font-normal">
                        {item.name}
                      </li>
                    </Link>
                  </SheetClose>
                </ul>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
