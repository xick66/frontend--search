
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className={styles.hamcontainer}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
      </div>

      <motion.div
        className={styles.menu}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <Link href="/">
          <div className={styles.menuItem}>Search</div>
        </Link>
        <Link href="/donor_side">
          <div className={styles.menuItem}>Donor Dashboard</div>
        </Link>
        <Link href="/volunteer_view">
          <div className={styles.menuItem}>Volunteer View</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
=======
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className={styles.hamcontainer}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
      </div>

      <motion.div
        className={styles.menu}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <Link href="/">
          <div className={styles.menuItem}>Search</div>
        </Link>
        <Link href="/donor_side">
          <div className={styles.menuItem}>Donor Dashboard</div>
        </Link>
        <Link href="/volunteer_view">
          <div className={styles.menuItem}>Volunteer View</div>
        </Link>
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;

