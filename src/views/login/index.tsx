import styles from "../../styles/login.module.css";
import Logo from "../../assets/images/logo.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PropsForm } from "../../types";

const schema = yup.object().shape({
  user: yup
    .string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});
const Login = () => {
  const {
    handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<PropsForm> = (data) => {
    console.log(data);
    // reset();
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerCardLogin}>
        <div className={styles.containerImage}>
          <img src={Logo} alt="Logo CCL" className={styles.imageLogo} />
        </div>
        <div className={styles.containerForm}>
          <div className={styles.containerImageResponsive}>
            <img
              src={Logo}
              alt="Logo CCL"
              className={styles.imageLogoResponsive}
            />
          </div>
          <h4 className={styles.titleForm}>
            Bienvenido al Gestor de Inventario
          </h4>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.containerIpunt}>
              <Controller
                name="user"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Usuario"
                    alt="Campo para ingresar email"
                    {...field}
                  />
                )}
              />
              {errors.user && (
                <p className={styles.textError}>{errors.user.message}</p>
              )}
            </div>
            <div className={styles.containerIpunt}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    placeholder="Contraseña"
                    alt="Campo para ingresar contraseña"
                    {...field}
                  />
                )}
              />
              {errors.password && (
                <p className={styles.textError}>{errors.password.message}</p>
              )}
            </div>

            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
