import React, {useState} from 'react';
import Styles from './index.module.css';
import Input from '../elements/Input';
import Label from '../elements/Label';
import firebase from '../../fire';
import Button from '../elements/Button'; 
import PaymentBtn from '../rave/rave';



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
                <form className={Styles.form}>
                <select name="Select One" className={Styles.area}>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <Label>Full Name*</Label>
                <Input type="text" name="name" onInput={(event) => handleInput(event)}/>
                <Label>Email*</Label>
                <Input name="email" type="email" onInput={(event) => handleInput(event)}/>
                <Label>Password*</Label>
                <Input name="password" type="password" onInput={(event) => handleInput(event)}/>
                <Label>Re-enter Password*</Label>
                <Input name="password" type="password" onInput={(event) => handleInput(event)}/>
                <Label>Top Skill</Label>
                <select name="Select One" className={Styles.area}>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <Label>Other Skill</Label>
                <select name="Select One" className={Styles.area}>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <Label>Bio</Label>
                <textarea placeholder="Type" class={Styles.textarea}></textarea>

                <Button type="submit" onClick={(e) => {
                    e.preventDefault();
                    signup ? handleSignUp(state.email, state.password) : handleSignIn(state.email, state.password)
                    }}>
                    {signup ? "sign up" : "signin"}
                </Button>
                <PaymentBtn />
            </form>

            
    </>
    )
}
export default Auth;    