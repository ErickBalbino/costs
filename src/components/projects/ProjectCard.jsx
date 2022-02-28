import React from "react"
import { Link } from "react-router-dom"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

import styles from "./ProjectCard.module.css"

export default function ProjectCard({id, name, budget, category, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_title}>
                <h3>{name}</h3>
            </div>
            
            <div className={styles.container_description}>
                <p>Orçamento: R$ {budget}</p>
                <p>Serviço: </p>
                <ul>
                    <li>{category}</li>
                </ul>
            </div>

            <div className={styles.container_buttons}>
                <Link to={`/projects/${id}`} className={styles.button_edit}>
                    <BsPencil className={styles.button_icon}/>EDITAR
                </Link>
                <button className={styles.button_delete} onClick={remove}>
                    <BsFillTrashFill className={styles.button_icon}/>EXCLUIR
                </button> 
            </div>
        </div>
    )
}