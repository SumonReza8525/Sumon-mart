import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div className="flex w-10/12 mx-auto my-16 gap-4 md:gap-10 items-center ">
      <div className="flex-1 ">
        <p>WELCOME TO</p>
        <h1 className="text-3xl md:text-6xl ">Sumon Store</h1>
        <p className="text-gray-500 text-xs md:text-base text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          aliquid autem hic porro laborum similique veniam eum beatae molestias
          officiis, excepturi sunt soluta aspernatur dicta recusandae voluptate
          rem aliquam et illum odit, laudantium qui ratione explicabo iusto?
          Laboriosam voluptates totam odio voluptas in aliquam labore, eligendi
          maiores, tenetur nostrum obcaecati.
        </p>
        <NavLink to="/products">
          <button className="bg-blue-600 px-4 py-2 mt-2 text-white cursor-pointer">
            SHOP NOW
          </button>
        </NavLink>
      </div>

      <div className="flex-1 flex justify-end">
        <img
          src="../../public/hero.jpg"
          alt=""
          className="w-200 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
