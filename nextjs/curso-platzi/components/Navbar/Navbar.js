import React from "react";
import Link from "next/link";
import est from "./navbar.module.css";

// const styleNav = {
//   position: "sticky",
//   top: 0,
//   width: "100%",
//   background: "#ffffff",
//   height: 50,
// };

// const styleMenu = {
//   display: "flex",
//   justifyContent: "space-around",
//   alignItems: "center",
//   width: "100%",
//   height: "100%",
// };
const Navbar = () => {
  return (
    <nav className={est.nav}>
      <menu className={est.menu}>
        <Link href="/">
          <a className={est.a}>
            <i className="bx bxs-store" />
            Avo Store
          </a>
        </Link>
        <Link href="/store">
          <a className={est.a}>
            <i className="bx bxs-shopping-bag-alt" />
            Canasta
          </a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
