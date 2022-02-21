import "./Select.module.css";

export default function Select({text, name, options, handleOnChange, value}){
    return(
        <label>
            <span>{text}</span>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </label>
    );
}