import styles from "./NewProject.module.css";
import ProjectForm from "../projects/ProjectForm";

export default function NewProject() {
  return (
    <section>
      <h1>Criar novo projeto</h1>
      <p>Crie um novo projeto para depois adicione os serviços!</p>

      <ProjectForm />
    </section>
  )
}
