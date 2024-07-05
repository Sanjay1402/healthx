"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css"; // Adjust the path accordingly

const Dropdown = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <Link href={link.url} className={styles.link} onClick={toggleDropdown}>
        {link.title}
      </Link>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {link.sublinks.map((sublink) => (
            <Link
              key={sublink.id}
              href={sublink.url}
              className={styles.sublink}
            >
              {sublink.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
