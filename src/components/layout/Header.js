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
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/company">
              Sobre
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/contact">
              Contato
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/projects">
              Meus Projetos
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
