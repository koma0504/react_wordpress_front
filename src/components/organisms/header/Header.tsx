import Link from "next/link";
import s from "./Header.module.scss";
import { useRouter } from "next/router";
import { useHover } from "@/components/atoms/HoverContextProvider";
const Header = () => {
  const router = useRouter();
  const menuList = ["about", "works", "service", "contact"];

  const { setIsHovering } = useHover();

  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        <Link
          href="/"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Cadle
        </Link>
      </h1>
      <ul className={s.menu}>
        {menuList.map((path) => (
          <li
            className={router.pathname.includes(`/${path}`) ? s.active : ""} // includesメソッドを使用してパスを確認
            key={path}
          >
            <Link
              href={`/${path}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {path || "home"}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
