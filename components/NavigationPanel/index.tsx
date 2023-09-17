"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "@/redux/store";
import { setBurgerState } from "@/redux/navigation/slice";

import styles from "./NavigationPanel.module.scss";

export const NavigationPanel = () => {
  const dispatch = useDispatch();
  const { navItems, burgerState: isActive } = useSelector(
    (state: RootState) => state.navigation
  );

  return (
    <div className={clsx(styles.navPanel, { [styles.active]: isActive })}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.toLowerCase()}`}
              onClick={() => dispatch(setBurgerState(false))}
            >
              <p>{item}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
