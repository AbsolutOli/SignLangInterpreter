import styles from "./Rooms.module.scss";

import { Chat } from "@/components/Chat";

import dynamic from "next/dynamic";

const UsersBlock = dynamic(() => import("../../components/UsersBlock"), {
  ssr: false,
});

const Rooms: React.FC = () => {
  return (
    <div className={styles.room}>
      <UsersBlock />
      <Chat />
    </div>
  );
};

export default Rooms;
