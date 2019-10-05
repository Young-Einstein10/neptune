import React from 'react';
import Styles from './index.module.css';


const Label = ({children}) => <label className={Styles.label}>{children}</label>


export default Label;