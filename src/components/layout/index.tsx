import { FC, useState } from "react";
import { PropsLayout } from "../../types";
import styles from "../../styles/layout.module.css";
import Menu from "../menu/index.";
import MenuResponsive from "../menuResponsive/index.";

const Layout: FC<PropsLayout> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <main className={styles.container}>
      <MenuResponsive setOpenModal={setOpenModal} />
      <section className={styles.sectionMenu}>
        <Menu />
      </section>
      <section className={styles.sectionContent}>{children}</section>
      <div
        className={`${styles.containerModal} ${openModal ? styles.open : ""}`}
      >
        <Menu />
      </div>
    </main>
  );
};

export default Layout;
