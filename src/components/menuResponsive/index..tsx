import { FC } from "react";
import styles from "../../styles/menuResponsive.module.css";
import { PropsMenuResponsive } from "../../types";


const MenuResponsive: FC<PropsMenuResponsive> = ({ setOpenModal }) => {
  return (
    <div
      className={styles.container}
      onClick={() => setOpenModal((prev) => !prev)}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
};

export default MenuResponsive;
