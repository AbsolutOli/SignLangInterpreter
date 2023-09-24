import Image from "next/image";
import styles from "./Chat.module.scss";

export const Chat: React.FC = () => {
  return (
    <div className={styles.chat}>
      <ul className={styles.chat__messageList}>
        <li className={styles.chat__message}>
          <Image
            className={styles.chat__avatar}
            alt="Chat Avatar"
            src="/avatar.jpg"
            width={50}
            height={67}
          />
          <div className={styles.chat__userMessage}>
            <p className={styles.chat__nickname}>broke.oli</p>
            <p className={styles.chat__text}>Hey There!</p>
          </div>
        </li>
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
