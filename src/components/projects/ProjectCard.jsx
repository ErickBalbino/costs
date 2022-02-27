import React from 'react';
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

import styles from "./ProjectCard.module.css";

export default function ProjectCard({id, name, budget, category, handleRemove}){
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
                <button className={styles.button_edit}><BsPencil className={styles.button_icon} />EDITAR</button>
                <button className={styles.button_delete}><BsFillTrashFill className={styles.button_icon}/>EXCLUIR</button>
            </div>
        </div>
    );
}