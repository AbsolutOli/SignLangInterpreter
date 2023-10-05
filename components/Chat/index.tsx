"use client";

import Image from "next/image";
import styles from "./Chat.module.scss";
import { useAppSelector } from "@/redux/storeHooks";

export const Chat: React.FC = () => {
  const { chatItems } = useAppSelector((state) => state.chat);

  return (
    <div className={styles.chat}>
      <ul className={styles.chat__messageList}>
        {chatItems.map((item, index) => (
          <li key={index} className={styles.chat__message}>
            <Image
              className={styles.chat__avatar}
              alt="Chat Avatar"
              src="/avatar.jpg"
              width={50}
              height={67}
            />
            <div className={styles.chat__userMessage}>
              <p className={styles.chat__nickname}>broke.oli</p>
              <p className={styles.chat__text}>{item}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.chat__input}>
        <input type="text" placeholder="Input your message..." />
        <button type="submit">
          <Image
            src="/send-message.png"
            alt="Send Message"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
