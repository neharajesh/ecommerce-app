import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = ({ handleToggleSidebar }) => {
  return (
    <>
      <div className="header flex flex-space-between flex-items-center">
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />
        <div className="txt-xl txt-700">Brand Name</div>

        <div className="flex">
          <p className="mg-lr-1">Profile</p>
          <p className="mg-lr-1">Cart</p>
          <p className="mg-lr-1">Wishlist</p>
        </div>
      </div>
    </>
  );
};
