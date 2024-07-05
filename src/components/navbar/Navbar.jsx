"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Solutions",
    url: "/",
  },

  {
    id: 2,
    title: "Resources",
    url: "/blog",
  },
  {
    id: 3,
    title: "About us",
    url: "/about",
  },
];

const Navbar = () => {
  return (
    <div className="container flex justify-between my-5 flex-wrap">
      <Link href="/" className={styles.logo}>
        <div className="flex items-center">
          <div className="flex items-center">
            <Image src="/logo 1.png" alt="" height={100} width={100} />
            <Image src="/logo 2.png" alt="" height={100} width={100} />
          </div>
          <span className="font-light	ml-2">|</span>
          <div className="flex items-center">
            <Image src="/logo 3.png" alt="" height={50} width={80} />
            <Image src="/logo 4.png" alt="" height={50} width={80} />
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-7 flex-wrap">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <div className="">
          <select className={styles.selstyles} name="language" id="language">
            <option value="english">eng</option>
            <option value="urdu">urdu</option>
          </select>
        </div>
        <button
          className={styles.downloadbutton}
          onClick={() => {
            console.log("downloaded");
          }}
        >
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
