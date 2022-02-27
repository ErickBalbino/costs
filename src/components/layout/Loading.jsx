import React from 'react'

import styles from "./Loading.module.css"
import imgLoading from "../../images/loading.svg"

export default function Loading(){
    return(
        <div className={styles.container_loader}>
            <img src={imgLoading} alt="imagem loading" />
        </div>
    )
}