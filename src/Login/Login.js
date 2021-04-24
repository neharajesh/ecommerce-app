import { NavLink } from "react-router-dom";
import "../styles.css";

export const Login = () => {
  return (
    <div className="h-100 w-100 flex-col flex-items-center">
      <h1>This is the login page!</h1>
      <NavLink to="/">Go back home</NavLink>
    </div>
  );
};
