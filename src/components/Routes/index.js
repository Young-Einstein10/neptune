import React from 'react';
import {Route} from 'react-router-dom';
import Auth from '../Auth';
import Chatroom from '../Chatroom';
const Routes = () => (
    <>
        <Route path="/signup" exact render={(prop) => <Auth {...prop} signup/> } />
        <Route path="/signin" exact render={(prop) => <Auth {...prop}/> } />
        <Route path="/chatroom" exact render={(prop) => <Chatroom {...prop}/> } />
    </>
)
export default Routes;