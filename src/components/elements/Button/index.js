import React from 'react';
import Styles from './index.module.css';


const Button = ({children, type, onClick}) => <button className={Styles.button} type={type} onClick={onClick}>{children}</button>



export default Button;