"use client";

import Image from "next/image";
import styles from "./Chat.module.scss";

import { useAppSelector } from "@/redux/storeHooks";

import { useDispatch } from "react-redux";
import { addChatItem } from "@/redux/chat/slice";

import { useRef } from "react";

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const { chatItems } = useAppSelector((state) => state.chat);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendButtonClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      dispatch(addChatItem(inputValue));
      inputRef.current.value = "";
    }
  };

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
        <input ref={inputRef} type="text" placeholder="Input your message..." />
        <button onClick={() => sendButtonClick()} type="submit">
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
