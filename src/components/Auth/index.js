import React, {useState} from 'react';
import Styles from './index.module.css';
import Input from '../elements/Input';
import Label from '../elements/Label';
import firebase from '../../fire';
import Button from '../elements/Button';
const Auth = ({signup}) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleSignUp = (email, password) => {
        console.log(email)
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            console.log("CREATED")
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const handleSignIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            console.log("SGNED IN")
        })
    }
    const handleInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        console.log(state);
    }
    return (
        <>
            <h1 className={Styles.red}>Sign Up</h1>
            <form>
                <Label>Full Name*</Label>
                <Input type="text" name="name" onInput={(event) => handleInput(event)}/>
                <Label>Email*</Label>
                <Input name="email" type="email" onInput={(event) => handleInput(event)}/>
                <Label>Password*</Label>
                <Input name="password" type="password" onInput={(event) => handleInput(event)}/>
                <Button type="submit" onClick={(e) => {
                    e.preventDefault();
                    signup ? handleSignUp(state.email, state.password) : handleSignIn(state.email, state.password)
                    }}>
                    {signup ? "sign up" : "signin"}
                    </Button>
            </form>
    </>
    )
}
export default Auth;    