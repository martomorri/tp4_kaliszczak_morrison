import React from 'react';
import './Input.css';

export default function Input(props = "") {
    let input = null;
    if (props.type !== "textarea") {
        input = <input type={props.type} name={props.name} className="u-full-width" placeholder={props.placeholder} value="" />
    }
    else input = <textarea name={props.name} className="u-full-width"></textarea>
    return (
        <>
            <label>{props.label}</label>
            {input}
        </>
    )
}