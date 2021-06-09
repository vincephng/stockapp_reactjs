import React from 'react';
import {Route,Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component,user, ...rest }) => {
    const isAuth = localStorage.getItem("UserData");
    return (<Route {...rest} render= {(props) =>{ 
        if (isAuth){
           return <Component {...rest} {...props}/>
        }else{
           return <Redirect to ={{pathname: '/403errorpage',}}/>
           
        }
    }} />)
}

export default ProtectedRoute;