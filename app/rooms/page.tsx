import Image from "next/image";
import styles from "./Rooms.module.scss";
import clsx from "clsx";

import { UsersBlock } from "@/components/UsersBlock";
import { Chat } from "@/components/Chat";

const Rooms: React.FC = () => {
  return (
    <div className={styles.room}>
      <UsersBlock />
      <Chat />
    </div>
  );
};

export default Rooms;
