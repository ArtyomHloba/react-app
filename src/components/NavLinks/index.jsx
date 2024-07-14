import classNames from "classnames";
import styles from "./NavLinks.module.css";
import { useState } from "react";

const NAV_LINKS = [
  {
    icon: "/icons/learn.svg",
    menuItem: "Навчання",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/sounds.svg",
    menuItem: "Звуки",
    link: "#",
    hasNotifications: false,
    isActive: true,
  },
  {
    icon: "/icons/practice.svg",
    menuItem: "Практика",
    link: "#",
    hasNotifications: true,
    isActive: false,
  },
  {
    icon: "/icons/resultsBoard.svg",
    menuItem: "Дошки пошани",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/quests.svg",
    menuItem: "Квести",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/store.svg",
    menuItem: "Магазин",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/profile.png",
    menuItem: "Профіль",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
  {
    icon: "/icons/more.svg",
    menuItem: "Більше",
    link: "#",
    hasNotifications: false,
    isActive: false,
  },
];

function NavLinks() {
  const [navLinks, setNavLinks] = useState(NAV_LINKS);

  const mapNavList = (nl) => {
    const linkClassName = classNames(styles.navLink, {
      [styles.activeNavLink]: nl.isActive,
    });

    return (
      <li key={nl.icon}>
        <a className={linkClassName} href={nl.link}>
          <img className={styles.navImg} src={nl.icon} /> {nl.menuItem}
        </a>
      </li>
    );
  };

  return <ul className={styles.navList}>{navLinks.map(mapNavList)}</ul>;
}

export default NavLinks;
