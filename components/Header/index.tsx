import Image from "next/image";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoBlock}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="LogoImage"
          width={50}
          height={50}
        />
        <p>
          Mio<span>Gesto</span>
        </p>
      </div>
      <nav className={styles.header__navigation}>
        <ul>
          <li>
            <p>Rooms</p>
          </li>
          <li>
            <p>Friends</p>
          </li>
          <li>
            <p>Settings</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
