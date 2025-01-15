import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import styles from "../../styles/menu.module.css";
import { MdInventory, MdOutlineAddCircle } from "react-icons/md";
import { IoHomeSharp, IoRemoveCircle } from "react-icons/io5";
const Menu = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className={styles.containerImage}>
        <img src={Logo} className={styles.image} />
      </div>
      <div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <IoHomeSharp color={pathname === "/" ? "#121c37" : "#b8b8b8"} />
              <Link to="/">
                <p className={pathname === "/" ? styles.linkActive : ""}>
                  Inicio
                </p>
              </Link>
            </li>
            <li>
              <MdOutlineAddCircle
                color={pathname === "/recordIn" ? "#121c37" : "#b8b8b8"}
              />
              <Link to="/recordIn">
                <p className={pathname === "/recordIn" ? styles.linkActive : ""}>
                  Ingreso producto
                </p>
              </Link>
            </li>
            <li>
              <IoRemoveCircle
                color={pathname === "/recordOut" ? "#121c37" : "#b8b8b8"}
              />
              <Link to="/recordOut">
                <p className={pathname === "/recordOut" ? styles.linkActive : ""}>
                  Salida producto
                </p>
              </Link>
            </li>
            <li>
              <MdInventory
                color={pathname === "/inventory" ? "#121c37" : "#b8b8b8"}
              />
              <Link to="/inventory">
                <p className={pathname === "/inventory" ? styles.linkActive : ""}>
                  Consulta de inventario
                </p>
              </Link>
            </li>
            <li>
              <button>Cerrar sesion</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
