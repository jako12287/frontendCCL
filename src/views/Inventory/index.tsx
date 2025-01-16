import { FC, useState } from "react";
import styles from "../../styles/inventory.module.css";

interface Product {
  id: string;
  name: string;
  description: string;
  stock: number;
  price: number;
}

const Inventory: FC = () => {
  const [productos] = useState<Product[]>([
    { id: "1", name: "Producto A", description: "Descripción A", stock: 50, price: 100 },
    { id: "2", name: "Producto B", description: "Descripción B", stock: 30, price: 200 },
    { id: "3", name: "Producto C", description: "Descripción C", stock: 10, price: 150 },
  ]);

  return (
    <div className={styles.container}>
      <h2>Inventario Actual</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.name}</td>
              <td>{producto.description}</td>
              <td>{producto.stock}</td>
              <td>${producto.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
