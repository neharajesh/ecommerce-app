import "./sidebar.css";
import { RiHomeLine } from "react-icons/ri";
import { IoMdList } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { useLogin } from "../../context/login-context";
import { NavLink } from "react-router-dom";
import { AiOutlineDropbox } from "react-icons/ai";

export const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const { login } = useLogin();
  return (
    <>
      <nav className={sidebar ? "sidebar open" : "sidebar"}>
        <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
          <RiHomeLine size={30} /> <span>Home</span>
        </NavLink>
        <NavLink
          to="/products"
          className="nav-link"
          activeClassName="nav-active"
        >
          <AiOutlineDropbox size={30} /> <span>Products</span>
        </NavLink>
        {/* add navlink for the rest of these */}
        <li className="nav-link">
          <IoMdList size={30} /> <span>Categories</span>
        </li>
        <hr />
        <li className="nav-link">
          <VscAccount size={30} /> <span>Profile</span>
        </li>
        <NavLink to="/cart" className="nav-link" activeClassName="nav-active">
          <FiShoppingCart size={30} /> <span>Cart</span>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="nav-link"
          activeClassName="nav-active"
        >
          <FaRegHeart size={30} /> <span>Wishlist</span>
        </NavLink>
        <li className="nav-link">
          {login ? <BiLogOut size={30} /> : <BiLogIn size={30} />}
          <span>{login ? "Logout" : "Login"}</span>
        </li>
        {/* <li>Login</li> */}
      </nav>
    </>
  );
};
