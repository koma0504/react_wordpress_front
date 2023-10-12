import Link from "next/link";
import s from "./Header.module.scss";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const menuList = ["about", "works", "service", "contact"];
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <Link href="/">cadle</Link>
      </h1>
      <ul className={s.menu}>
        {menuList.map((path) => (
          <li
            className={router.pathname.includes(`/${path}`) ? s.active : ""} // includesメソッドを使用してパスを確認
            key={path}
          >
            <Link href={`/${path}`}>{path || "home"}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
