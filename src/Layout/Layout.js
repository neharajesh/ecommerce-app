import { useState } from "react";
import "../styles.css";
import { Header } from "./header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    toggleSidebar((sidebar) => !sidebar);
  };
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="container-app">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <div className="container-page">{children}</div>
      </div>
    </>
  );
};
