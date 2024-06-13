"use client"

import React from 'react'
import Link from 'next/link'
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
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
      <div>
        <Image
              src="/logo 1.png"
              alt=""
              height="122"
              width="103"
              className={styles.image}
            />
        <Image
            src="/logo 2.png"
            alt=""
            height="31"
            width="122"
            className={styles.logo2}
          />  
          <span className={styles.bar}>|</span>  
           <Image
            src="/logo 3.png"
            alt=""
            height="23"
            width="105"            
            className={styles.logo3}
          />
        <Image
            src="/logo 4.png"
            alt=""
            height="47"
            width="105"
            className={styles.logo4}
          />  
      </div>
             
      </Link>
      <div className={styles.links}>
        {links.map(link => <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link> )   }
        <div className={styles.seldiv }>
        <select className={styles.selstyles } name="language" id="language">
          <option value="english">eng</option>
          <option value="urdu">urdu</option>
        </select>
        </div>
       
      </div>
      <button className={styles.button} onClick={() => {console.log("downloaded");
      }}>
            Download App
          </button>
    </div>
  )
}

export default Navbar