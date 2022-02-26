import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./Project.module.css";
import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Projects() {

  const location = useLocation();
  let message = ""
  if (location.state){
    message = location.state.message
  }

  return(
    <main>
      <div className={styles.container_title}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"/>
      </div>

      <div>
        {message && (
           <Message type="success" message={message} />
        )}
      </div>

      <Container customClass="start">
          <p>Projetos...</p>
      </Container>
    </main>
  );
}
