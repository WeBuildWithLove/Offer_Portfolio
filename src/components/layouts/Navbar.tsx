import { Link } from "react-router-dom";
import Logo from "../../assets/PhotoIcon.svg";
import Menu from "../../assets/Menu.svg";
import { navLinks } from "../../constant/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import SmallBtn from "../ui/btns/SmallBtn";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-10 p-4 px-[8%]">
      <div className="flex items-center gap-2">
        <img
          src={Logo}
          alt="logo as photo"
          width={57.57}
          height={57.57}
          className="rounded-full shadow-custom-shadow"
        />

        <div>
          <h5 className=" text-sm lg:text-xl font-bold">Daniel Araromi</h5>
          <h6 className=" text-[10px] lg:text-[11.93px] font-medium opacity-[0.7]">
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
        <SmallBtn
          label="Book Now"
          className="w-[190px] text-[16.96px] font-medium cursor-pointer hover:to-color-end/80"
        />
      </div>
      <div className="flex flex-col md:hidden items-center">
        <Sheet>
          <SheetTrigger>
            <img
              src={Menu}
              alt="menu bar"
              width={24}
              height={24}
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
