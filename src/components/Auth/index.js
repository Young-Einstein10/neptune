import React from 'react';
import Styles from './index.module.css';
import Input from '../elements/Input';
import Label from '../elements/Label';
const Auth = () => (
    <>
        <h1 className={Styles.red}>Sign Up</h1>
        <form>
            <Label>Full Name*</Label>
            <Input type="text" name="name" />
            <Label>Email*</Label>
            <Input name="email" type="email" />
            <Label>Password*</Label>
            <Input type="password" />
        </form>
   </>
)
export default Auth;