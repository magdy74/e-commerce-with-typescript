import React from "react";
import './input-form.style.css'

const InputForm = ({name, type, value, onChange}) => (
    <div className="group">
        <input className="input-form" name={name} type={type} value={value} onChange={onChange} required/>
        <label className={`${value.length > 0 ? 'shrink' : null} InputForm-Label`}>{name}</label>
    </div>
)

export default InputForm;
