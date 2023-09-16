"use client";

import React from "react";
import Link from "next/link";
import styles from "./NavigationPanel.module.scss";
import clsx from "clsx";

type NavPanelProps = {
  navItems: string[];
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavigationPanel: React.FC<NavPanelProps> = ({
  navItems,
  isActive,
  setIsActive,
}) => {
  return (
    <div className={clsx(styles.navPanel, { [styles.active]: isActive })}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsActive(false)}
            >
              <p>{item}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
