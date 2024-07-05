"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Dropdown from "./Dropdown";
const links = [
  {
    id: 1,
    title: "Solutions",
    url: "#",
    sublinks: [
      { id: 1.1, title: "Solution Corporates", url: "/solutions_corporates" },
      { id: 1.2, title: "Solutions Government", url: "/solutions_govt" },
      { id: 1.3, title: "Solutions Individual", url: "/solutions_individual" },
      { id: 1.4, title: "Solutions Insurers", url: "/solutions_insurers" },
    ],
  },
  {
    id: 2,
    title: "Resources",
    url: "#",
    sublinks: [
      { id: 2.1, title: "News and Media", url: "/news" },
      { id: 2.2, title: "Blogs", url: "/blogs" },
      { id: 2.3, title: "Blog details", url: "/blogdetails" },
      { id: 2.3, title: "FAQ", url: "/faq" },
    ],
  },
  {
    id: 3,
    title: "About us",
    url: "#",
    sublinks: [
      { id: 3.1, title: "Contact Us", url: "/contactus" },
      { id: 3.2, title: "About Us", url: "/aboutus" },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between my-5 flex-wrap gap-16">
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
          <Dropdown key={link.id} link={link} />
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
