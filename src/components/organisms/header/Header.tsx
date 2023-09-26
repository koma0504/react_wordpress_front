import Link from "next/link";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <Link href="/">company name</Link>
      </h1>
      <ul className={s.menu}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="about">about us</Link>
        </li>
        <li>
          <Link href="works">works</Link>
        </li>
        <li>
          <Link href="service">service</Link>
        </li>
        <li>
          <Link href="contact">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
