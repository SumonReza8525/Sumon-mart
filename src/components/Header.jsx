import { X, Menu } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [isMobile, setIsmobile] = useState(true);

  const handleMobile = () => {
    setIsmobile((prev) => !prev);
    console.log(isMobile);
  };

  return (
    <div
      className={` bg-amber-400 flex items-center justify-between py-4 px-6 `}
    >
      {/* Logo div */}
      <div
        className={`${isMobile || "hidden"}  px-4 py-1.5 space-x-1.5 bg-amber-50 rounded-tl-2xl rounded-br-2xl`}
      >
        <span
          className={`text-3xl md:text-5xl roboto font-bold text-fuchsia-600 `}
        >
          S
        </span>
        <span className="text-3xl md:text-5xl roboto font-bold">M</span>
      </div>
      <Navbar isMobile={isMobile}></Navbar>
      <div onClick={handleMobile} className="cursor-pointer md:hidden">
        {isMobile ? <Menu></Menu> : <X></X>}
      </div>
    </div>
  );
};

export default Header;
