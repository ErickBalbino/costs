import "./Input.module.css";

export default function Input({text, type, name, id, placeH, value, handleOnChange}){
    return(
        <label>
            <span>{text}</span>
            <input type={type} name={name} id={id} placeholder={placeH} value={value} onChange={handleOnChange} />
        </label>
    );  
}