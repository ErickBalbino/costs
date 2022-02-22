import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles}>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p>
        Projeto desenvolvido por <span>Costs</span> &copy; 2021
      </p>
    </footer>
  );
}
