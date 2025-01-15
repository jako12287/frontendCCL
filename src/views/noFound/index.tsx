import styles from "../../styles/noFound.module.css";
import image404 from "../../assets/images/image404.png";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <title>Página No Encontrada | CCL</title>
      <img alt="Imagen de error 404" src={image404} className={styles.image} />
    </section>
  );
};

export default NotFound;
