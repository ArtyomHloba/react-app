import styles from "./NavLinks.module.css";

function NavLink() {
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
}

export default NavLink;
