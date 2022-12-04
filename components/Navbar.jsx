import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({href,text}=item) => (
        <ActiveLink href={href} text={text} key={text} />
      ))}
    </nav>
  );
};

export default Navbar;
