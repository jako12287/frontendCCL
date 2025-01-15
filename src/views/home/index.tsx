import styles from "../../styles/home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bienvenido al sistema de gestión de inventario de CCL
      </h1>
      <p className={styles.description}>
        Esta aplicación te permite registrar entradas y salidas de productos,
        consultar el inventario actual y mantener un control eficiente de los
        recursos de la empresa.
      </p>
      <p className={styles.subDescription}>
        Optimiza la administración de tus productos con facilidad y precisión.
      </p>
    </div>
  );
};

export default Home;
