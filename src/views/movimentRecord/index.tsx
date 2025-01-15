import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "../../styles/addProduct.module.css";
import { PropsFormAddProduct } from "../../types";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  description: yup.string().required("La descripción es obligatoria"),
  price: yup
    .number()
    .transform((value) => (value === "" || isNaN(value) ? 0 : value))
    .positive("El precio no puede ser negativo")
    .required("El precio es obligatorio"),
  quantity: yup
    .number()
    .transform((value) => (value === "" || isNaN(value) ? 0 : value))
    .positive("La cantidad no puede ser negativa")
    .required("La cantidad es obligatoria"),
});

const MovimentRecord = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      price: 0,
      quantity: 0,
    },
  });

  const onSubmit: SubmitHandler<PropsFormAddProduct> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formAdd}>
        <div className={styles.containerIpunt}>
          <label htmlFor="name">Nombre del Producto</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="name"
                alt="Nombre del producto"
                placeholder="Nombre del producto"
                {...field}
              />
            )}
          />
          {errors.name && (
            <p className={styles.textError}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.containerIpunt}>
          <label htmlFor="description">Descripción</label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="text"
                id="description"
                alt="Descripción del producto"
                placeholder="Descripción"
                {...field}
              />
            )}
          />
          {errors.description && (
            <p className={styles.textError}>{errors.description.message}</p>
          )}
        </div>
        <div className={styles.containerIpunt}>
          <label htmlFor="price">Precio</label>
          <Controller
            name="price"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <input
                type="number"
                id="price"
                alt="Precio del producto"
                placeholder="Precio"
                {...field}
                value={field.value === 0 ? "" : field.value}
                onChange={(e) => {
                  const value =
                    e.target.value === "" ? "" : Number(e.target.value);
                  field.onChange(value);
                }}
              />
            )}
          />
          {errors.price && (
            <p className={styles.textError}>{errors.price.message}</p>
          )}
        </div>
        <div className={styles.containerIpunt}>
          <label htmlFor="quantity">Cantidad</label>
          <Controller
            name="quantity"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <input
                type="number"
                id="quantity"
                alt="Cantidad del producto"
                placeholder="Cantidad"
                {...field}
                value={field.value === 0 ? "" : field.value}
                onChange={(e) => {
                  const value =
                    e.target.value === "" ? "" : Number(e.target.value);
                  field.onChange(value);
                }}
              />
            )}
          />
          {errors.quantity && (
            <p className={styles.textError}>{errors.quantity.message}</p>
          )}
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default MovimentRecord;
