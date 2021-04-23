import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = ({ handleToggleSidebar }) => {
  return (
    <>
      <div className="header">
        <GiHamburgerMenu
          className="header-menu"
          size={35}
          onClick={() => handleToggleSidebar()}
        />
        <div className="header-brand">Brand Name</div>

        <div className="header-links">
          <p>Profile</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </div>
      </div>
    </>
  );
};
