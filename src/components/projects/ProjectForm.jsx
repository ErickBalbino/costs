import React, { useState, useEffect } from 'react';

import "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";

export default function ProjectForm({handleSubmit, projectData}){
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

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }   

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return(
       <form onSubmit={submit}>
           <Input
                text="Nome do projeto" 
                type="text"
                name="name" 
                id="name" 
                placeH="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name}
            />
           <Input  
                text="Orçamento do projeto" 
                type="number" 
                name="budget" 
                id="budget" 
                placeH="Insira o orçamento total" 
                handleOnChange={handleChange}
                value={project.budget}
           />
           <Select 
                text="Selecione a categoria" 
                name="category_id" 
                id="category_id" 
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : " "}
           />
           <div>
               <button>Criar projeto</button>
           </div>
       </form>

    );
}
