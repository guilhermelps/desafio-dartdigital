import React from 'react';

import './styles.css';

export default function Input(props) {
  return(
    <input
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        onChange={e => {props.handleInput(e.target.value)}}
    />
  );
}