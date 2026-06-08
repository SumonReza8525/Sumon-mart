import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className=" bg-black pb-12 pt-16 relative mt-40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-10/12 mx-auto mb-20">
        <div className="text-white">
          <h3 className="text-lg">Sumon Ecommerce</h3>
          <p className="text-xs md:sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            voluptas fugiat suscipit ipsam porro ea illo!
          </p>
        </div>
        <div className="text-white space-y-2">
          <p>Subscribe to get important updates</p>
          <form action="$">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="w-40 px-3 py-2 placeholder:text-sm placeholder:text-gray-900 bg-gray-300 mr-3 focus:outline-0 autofill:off"
            />

            <input
              type="button"
              value="SUBSCRIBE"
              className="px-3 py-2 bg-blue-600"
            />
          </form>
        </div>
        <div className="text-white space-y-1.5">
          <p>Follow Us</p>
          <div className="flex gap-2">
            <img
              src="/cedric-streit-H7qMwOxf6Z8-unsplash.jpg"
              alt=""
              className="w-10 h-10  rounded-full object-cover"
            />{" "}
            <img
              src="/cedric-streit-H7qMwOxf6Z8-unsplash.jpg"
              alt=""
              className="w-10 h-10  rounded-full object-cover"
            />{" "}
            <img
              src="/cedric-streit-H7qMwOxf6Z8-unsplash.jpg"
              alt=""
              className="w-10 h-10  rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-white">
          <p>Call Us</p>
          <p className="text-xl">+880-01728903454</p>
        </div>
      </div>

      <hr className="bg-white h-0.5 mt-10 " />

      <div className="flex  w-10/12 mx-auto pt-8 justify-between items-center flex-col md:flex-row">
        <p className="text-white">
          @{new Date().getFullYear()} SumonEcommerce.All Rights Reserved
        </p>

        <div className="text-white text-sm">
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>

      <div className="bg-yellow-50  w-[70%] rounded-xl absolute -top-16 left-1/2 -translate-x-1/2 flex justify-between px-6 py-8 gap-3">
        <div className="text-xs md:text-base">
          <p>Ready to get started?</p>
          <p>Talk to us today</p>
        </div>

        <NavLink to="/contact">
          <button className="bg-blue-600 px-4 py-2 text-white text-xs cursor-pointer">
            GET STARTED
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
