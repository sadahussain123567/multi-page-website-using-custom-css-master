"use client";
import React, { useState } from "react";

import styles from "@/app/page.module.css";
import { Menu } from "lucide-react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src="/favicon2.png" alt="logo" className={styles.logoimg} />
              <span>SHJ</span>
            </div>
            <div className={styles.menu}>
              <Menu onClick={() => setIsActive(!isActive)} />
            </div>
            {isActive && (
              <div>
                <ul className={styles.navitems}>
                  <li>
                    <a className={styles.a} href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className={styles.a} href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className={styles.a} href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className={styles.tab}>
              <ul className={styles.navitems}>
                <li>
                  <a className={styles.a} href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className={styles.a} href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className={styles.a} href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
