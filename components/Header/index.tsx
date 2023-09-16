"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import clsx from "clsx";
import React from "react";
import { NavigationPanel } from "../NavigationPanel";

const navItems: string[] = ["Rooms", "Friends", "Settings"];

export const Header: React.FC = () => {
  const [burgerState, setBurgerState] = React.useState(false);

  return (
    <div className={styles.header}>
      <div className={clsx(styles.header__content, "content")}>
        <div className={styles.header__logoBlock}>
          <Link href="/" onClick={() => setBurgerState(false)}>
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="LogoImage"
              width={50}
              height={50}
            />
          </Link>
          <Link href="/" onClick={() => setBurgerState(false)}>
            <p>
              Mio<span>Gesto</span>
            </p>
          </Link>
        </div>
        <nav className={styles.header__navigation}>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`}>
                  <p>{item}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={clsx(styles.header__burger, {
              [styles.active]: burgerState,
            })}
            onClick={() => setBurgerState(!burgerState)}
          >
            <span></span>
          </div>
        </nav>
        <NavigationPanel
          navItems={navItems}
          isActive={burgerState}
          setIsActive={setBurgerState}
        />
      </div>
    </div>
  );
};
