import { render } from '@testing-library/react';
import React, { Component } from 'react'
import '../style/error.css'
import history from '../routes/history'
import stockPage from './stocksPage'


const ErrorPage =  (props) =>{
    return(
                <div className="d-flex justify-content-center align-items-center" id="main">
                    <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">{props.err.status}</h1>
                        <div className="inline-block align-middle">
                            <h1 className="font-weight-normal lead" id="desc">Oops!!! Look like we got lost.</h1>
                            <p className='reason'>Reason given: {props.err.reason} [ That's all I know :( ]</p>
                            <button className='back-home' onClick={() =>(history.push('/')) }>Back to Home</button>
                        </div>
                    
                 </div>
            );
}

export default ErrorPage;