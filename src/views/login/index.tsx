import styles from "../../styles/login.module.css";
import Logo from "../../assets/images/logo.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PropsForm } from "../../types";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/slices/authReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  user: yup
    .string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});
const Login = () => {
  // const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    const setUser = async () => {
      await localStorage.setItem("@TOKEN", "kjhkjhkhjkhkj");
      await localStorage.setItem("@USER", "{}");
    };

    setUser();
  }, []);
  useEffect(() => {
    const user = localStorage.getItem("@USER");
    const tokent = localStorage.getItem("@TOKEN");
    if (user && tokent) {
      navigation("/");
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  const {
    handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<PropsForm> = (data) => {
    console.log(data);
    // const dataSend = {
    //   user: data.user.toLowerCase(),
    //   password: data.password,
    // };
    // dispatch(login(dataSend) as never);
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
