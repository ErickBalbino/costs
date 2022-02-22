import React from "react";

import styles from "./Home.module.css";
import Savings from "../../images/savings.svg";
import Button from "../layout/LinkButton";

export default function Home() {
  return (
    <main className={styles.body}>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <Button to="/newproject" text="Criar Projeto" />
      <img src={Savings} alt="Costs" />
    </main>
  );
}
