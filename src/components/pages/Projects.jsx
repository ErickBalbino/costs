import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import styles from "./Project.module.css"
import Message from "../layout/Message"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../projects/ProjectCard"
import Loading from "../layout/Loading"

export default function Projects() {

  const[projects, setProjects] = useState([])
  const[removeLoading, setRemoveLoading] = useState(false)
  const[projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ""
  if (location.state){
    message = location.state.message
  }

  setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
  }, 1500)

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(projects.filter((project) => project.id !== id))
      setProjectMessage(`O projeto foi removido com sucesso!`)
    })
    .catch((err) => console.log(err))
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
        
        {projectMessage && <Message type="success" message={projectMessage} />}
      </div>

      <section className={styles.container_cards}>
          {projects.length > 0 && projects.map((project) => (
            <ProjectCard
              id={project.id} 
              name={project.name} 
              budget={project.budget} 
              category={project.category.name} 
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
      </section>
      {!removeLoading && <Loading />}
    </main>
  )
}
