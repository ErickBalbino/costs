import React from 'react';
import {useState, useEffect} from "react";

import "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";


export default function ProjectForm(handleSubmit, projectData){
    const[categories, setCategories] = useState([]);
    const[project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    return(
       <form onSubmit={submit}>
           <Input text="Nome do projeto" type="text" name="txtNomeProjeto" id="txtNomeProjeto" placeH="Insira o nome do projeto" />
           <Input text="Orçamento do projeto" type="number" name="valorOrcamento" id="valorOrcamento" placeH="Insira o orçamento total" />
           <Select text="Selecione a categoria" name="category_id" id="category_id" options={categories} />
           <div>
               <button>Criar projeto</button>
           </div>
       </form>

    );
}
