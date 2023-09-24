import Image from "next/image";
import styles from "./UsersBlock.module.scss";

export const UsersBlock: React.FC = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user__block}>
        <div className={styles.user__avatar}>
          <Image src="/avatar.jpg" alt="User Avatar" height={120} width={100} />
        </div>

        <div className={styles.user__bottomPanel}>
          <div className={styles.user__nickname}>broke.oli</div>
          <Image
            className={styles.user__micro}
            src="/microphone.svg"
            alt="Microphone"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};
