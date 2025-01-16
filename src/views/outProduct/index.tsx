import { FC, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "../../styles/outProduct.module.css"; // Asegúrate de tener el archivo CSS
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PropsFormOutProduct } from "../../types";

interface Product {
  id: string;
  name: string;
  stock: number;
}

const schema = yup.object().shape({
  product: yup.string().required("Selecciona un producto"),
  quantity: yup
    .number()
    .transform((value) => (value === "" || isNaN(value) ? 0 : value))
    .positive("La cantidad no puede ser negativa")
    .required("La cantidad es obligatoria"),
  reason: yup.string().required("Informacion del movimiento  "),
});

const OutProduct: FC = () => {
  const [productos] = useState<Product[]>([
    { id: "1", name: "Producto A", stock: 50 },
    { id: "2", name: "Producto B", stock: 30 },
    { id: "3", name: "Producto C", stock: 10 },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      product: productos[0]?.id || "", // Valor inicial explícito
      quantity: 0,
      reason: "",
    },
  });

  const onSubmit: SubmitHandler<PropsFormOutProduct> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <h2>Salida de Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formAdd}>
        <div className={styles.containerIpunt}>
          <label htmlFor="product">Producto</label>
          <Controller
            name="product"
            control={control}
            render={({ field }) => (
              <select {...field} id="product">
                {productos.map((producto) => (
                  <option key={producto.id} value={producto.id}>
                    {producto.name} - {producto.stock} en stock
                  </option>
                ))}
              </select>
            )}
          />
          {errors.product && (
            <p className={styles.textError}>{errors.product.message}</p>
          )}
        </div>

        <div className={styles.containerIpunt}>
          <label htmlFor="quantity">Cantidad a Retirar</label>
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <input
                id="cantidad"
                placeholder="Cantidad"
                type="number"
                {...field}
              />
            )}
          />
          {errors.quantity && (
            <p className={styles.textError}>{errors.quantity.message}</p>
          )}
        </div>

        <div className={styles.containerIpunt}>
          <label htmlFor="reason">Motivo de la Salida</label>
          <Controller
            name="reason"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="reason"
                placeholder="Ej. Venta, Donación"
              />
            )}
          />
          {errors.reason && (
            <p className={styles.textError}>{errors.reason.message}</p>
          )}
        </div>

        <button type="submit">Registrar Salida</button>
      </form>
    </div>
  );
};

export default OutProduct;
