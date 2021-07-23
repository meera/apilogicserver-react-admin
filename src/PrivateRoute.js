import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { UserContext } from './context/UserContext';

function PrivateRoute( { children, ...rest}) {
    const  { user } = useContext( UserContext);
    console.log( 'User ' , user);
    return (
        <Route {...rest} render={ ({location}) => 
            user && user.auth ? children :
            <Redirect
                to='/login'
            />}>
            
        </Route>
    )
}
export default PrivateRoute;