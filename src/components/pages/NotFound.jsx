import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

import styles from "./NotFound.module.css"

export default function NotFound(){
    return(
        <main>
            <h1>ERROR 404! Página não encontrada!</h1>
            <Link to="/">
                <button>
                    <FaArrowLeft className={styles.icon} />
                    <span>Voltar</span>
                </button>
            </Link>
        </main>
    )
}