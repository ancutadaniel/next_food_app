import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import clasess from "./main-header.module.css";

import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={clasess.header}>
        <Link href="/" className={clasess.logo}>
          <Image src={logoImg} alt="Food App" priority />
          Food App
        </Link>

        <nav className={clasess.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
