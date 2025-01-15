import styles from "../../styles/login.module.css";
import Logo from "../../assets/images/logo.jpg";
const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerCardLogin}>
        <div className={styles.containerImage}>
          <img src={Logo} alt="Logo CCL" className={styles.imageLogo} />
        </div>
        <div className={styles.containerForm}>
          <div className={styles.containerImageResponsive}>

        <img src={Logo} alt="Logo CCL" className={styles.imageLogoResponsive} />
          </div>
          <h4 className={styles.titleForm}>Bienvenido al Gestor de Inventario</h4>
          <form className={styles.form}>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
