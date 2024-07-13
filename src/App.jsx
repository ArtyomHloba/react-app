import { useState } from "react";
import NavLinks from "./components/NavLinks";

function App() {
  return (
    <>
      <NavLinks />
      <NavLink />
    </>
  );
}

export default App;

const NAV_LINK = {
  icon: "/icons/learn.svg",
  menuItem: "Навчання",
  link: "#",
  hasNotifications: false,
  isActive: false,
};

function NavLink() {
  const [navLink, setNavLink] = useState(NAV_LINK);

  const linkStyle = {
    border: navLink.isActive ? "1px solid blue" : "",
  };

  function changeActive() {
    // navLink.isActive = !navLink.isActive

    // STATE is IMMUTABLE
    const navLinkCopy = { ...navLink };
    navLinkCopy.isActive = !navLinkCopy.isActive;
    setNavLink(navLinkCopy);
  }

  return (
    <div key={navLink.icon}>
      <a onClick={changeActive} style={linkStyle} href={navLink.link}>
        <img src={navLink.icon} /> {navLink.menuItem}
      </a>
    </div>
  );
}
