import React from 'react';
import Styles from './index.module.css';
const Input = ({type, name}) => <input type={type} name={name} className={Styles.input}/>
export default Input;