import React, {Component} from 'react';
import './Button.css';

const Button = props => {
    return (
        <button className="button" onClick={props.onClick} style={{background: props.color}}>
            {props.text}
        </button>
    )
};

export default Button;