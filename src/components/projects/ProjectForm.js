import "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";


export default function ProjectForm(){
    return(
       <form>
           <Input text="Nome do projeto" type="text" name="txtNomeProjeto" id="txtNomeProjeto" placeH="Insira o nome do projeto" />
           <Input text="Orçamento do projeto" type="number" name="valorOrcamento" id="valorOrcamento" placeH="Insira o orçamento total" />
           <Select text="Selecione a categoria" name="category_id" id="category_id" />
           <div>
               <button>Criar projeto</button>
           </div>
       </form>

    );
}
