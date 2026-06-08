import { NavLink } from "react-router";

const Navbar = ({ isMobile }) => {
  return (
    <ul
      className={`md:flex-row md:flex gap-2.5 md:gap-10 ${isMobile ? "hidden" : "flex-col"} transition-all`}
    >
      <li
        className="hover:text-white
       "
      >
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/about">ABOUT</NavLink>
      </li>

      <li className="hover:text-white">
        <NavLink to="/products">PRODUCTS</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      <li className="hover:text-white">
        <NavLink to="/cart">CART</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
