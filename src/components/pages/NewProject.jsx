import React from "react";
import { useHistory } from "react-router-dom";

import "./NewProject.module.css";
import ProjectForm from "../projects/ProjectForm";

export default function NewProject() {

  const history = useHistory();
  
  function createProject(project){
    // initialize cost and service
    project.costs = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
    })
    .catch((err) => console.log(err))
  }

  return (
    <section>
      <h1>Criar novo projeto</h1>
      <p>Crie um novo projeto para depois adicione os serviços!</p>

      <ProjectForm handleSubmit={createProject} />
    </section>
  )
}
