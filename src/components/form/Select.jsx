import React from "react";

import "./Select.module.css";

export default function Select({text, name, options, handleOnChange, value}){
    return(
        <label>
            <span>{text}</span>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option hidden>Selecione uma opção</option>
                {
                    options.map((option) => (
                        <option value={option.id} key={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </label>
    );
}