import React from 'react';
import {Route} from 'react-router-dom';
import Auth from '../Auth';
const Routes = () => (
    <Route path="/signup" exact render={(prop) => <Auth {...prop}/> } />
)
export default Routes;