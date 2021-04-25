import "../layout.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = ({ handleToggleSidebar }) => {
  return (
    <>
      <div className="header flex flex-space-between flex-items-center">
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />
        <div className="txt-xl txt-700">Pet Smart</div>

        <div className="flex">
          <NavLink to="/cart" className="nav-link" activeClassName="nav-active">
            Cart
          </NavLink>
          <NavLink
            to="/wishlist"
            className="nav-link"
            activeClassName="nav-active"
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-link"
            activeClassName="nav-active"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};
