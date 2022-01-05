import styles from "./Header.module.css";
import Container from "./Container";
import Logo from "../../images/costs_logo.png";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className={styles.header}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="home costs" />
        </Link>

        <ul className={styles.list}>
          <li>
            <Link className={styles.listItem} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/company">
              SOBRE
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/contact">
              CONTATO
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/projects">
              MEUS PROJETOS
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
