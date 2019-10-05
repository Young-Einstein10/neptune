import React from 'react';
import Styles from './index.module.css';
const Input = ({type, name, onInput}) => <input type={type} name={name} className={Styles.input} onInput={onInput}/>
export default Input;