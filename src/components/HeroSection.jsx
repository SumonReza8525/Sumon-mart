import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div className="flex w-10/12 mx-auto my-20 lg:my-30 gap-4 md:gap-10 items-center flex-col md:flex-row">
      <div className="flex-1 ">
        <p className="lg:text-2xl">WELCOME TO</p>
        <h1 className="text-3xl md:text-5xl lg:7xl md:mb-2">Sumon Store</h1>
        <p className="text-gray-500 text-xs md:text-base text-justify lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          aliquid autem hic porro laborum similique veniam eum beatae molestias
          officiis, excepturi sunt soluta aspernatur dicta recusandae voluptate
          rem aliquam et illum odit, laudantium qui ratione explicabo iusto?
          Laboriosam voluptates totam odio voluptas in aliquam labore, eligendi
          maiores, tenetur nostrum obcaecati.
        </p>
        <NavLink to="/products">
          <button className="bg-blue-600 px-4 py-2 my-3 text-white cursor-pointer">
            SHOP NOW
          </button>
        </NavLink>
      </div>

      <div className="flex-1 flex justify-end relative">
        <img
          src="../../public/hero.jpg"
          alt=""
          className=" object-cover z-10"
        />
        <div className="h-[60%] w-[60%] bg-amber-200 absolute -top-10 -right-6 lg:-right-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
