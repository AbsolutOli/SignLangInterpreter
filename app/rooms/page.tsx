import styles from "./Rooms.module.scss";
import clsx from "clsx";

import { UsersBlock } from "@/components/UsersBlock";

const Rooms: React.FC = () => {
  return (
    <div className={styles.room}>
      <UsersBlock />
      <div className={clsx(styles.room__chat, styles.chat)}>
        <ul className="chat__messageList">
          <li className="chat__message">
            <p>Hey There!</p>
          </li>
        </ul>
        <div className="chat__input">
          <input type="text" placeholder="Input your message..." />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
