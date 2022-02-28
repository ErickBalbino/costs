import React from 'react'
import { Link } from 'react-router-dom'

import "./NotFound.module.css"

export default function NotFound(){
    return(
        <main>
            <h1>ERROR 404! Página não encontrada!</h1>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </main>
    )
}