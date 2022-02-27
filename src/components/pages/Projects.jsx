import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Project.module.css";
import Message from "../layout/Message";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {

  const[projects, setProjects] = useState([]);

  const location = useLocation();
  let message = ""
  if (location.state){
    message = location.state.message
  }

  useEffect(() => {
    
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(data)
    })
    .catch((err) => console.log(err))

  }, [])

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

      <section className={styles.container_cards}>
          {projects.length > 0 && projects.map((project) => (
            <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id}/>
          ))}
      </section>
    </main>
  );
}
