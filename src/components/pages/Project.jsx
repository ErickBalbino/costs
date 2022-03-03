import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Project.module.css'
import Loading from '../layout/Loading'
import ProjectForm from '../projects/ProjectForm'

export default function Project(){

    const { id } = useParams()
    console.log(id)

    const[project, setProject] = useState([])
    const[showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                // mensagem 
            })
            .catch((err) => console.log(err))
        }, 500)
    }, [id])

    function toogleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function editPost(project){
        //budget validation
        if(project.budget < project.cost){
            // mensagem
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            //mensagem
        })
        .catch((err) => console.log(err))
    }

    return(
        <main className={styles.main}>
            {project.name ? (
                <div>
                    <section className={styles.container}>
                        <div className={styles.container_title}>
                            <h1>{project.name}</h1>

                            <button className={styles.button} onClick={toogleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                        </div>

                        {!showProjectForm ? (
                            <div className={styles.description}>
                                <p>
                                    <span>Categoria: </span>
                                    {project.category.name}
                                </p>
                                <p>
                                    <span>Total do orçamento: </span>R$ {project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado: </span>R$ {project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.form}>
                                <ProjectForm handleSubmit={editPost} projectData={project} btnText="Finalizar edição" />
                            </div>
                        )}
                    </section>
                </div>
            ) : (
                <Loading />
            )}
        </main>
    )   
}