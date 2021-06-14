import React from 'react'
import '../style/403forbidden.css'
import history from '../routes/history'

const ForbiddenPage =  () =>{
    return(
                <div className="d-flex justify-content-center align-items-center" id="main">
                    <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center" id="status">403</h1>
                        <div className="inline-block align-middle">
                            <h1 className="font-weight-normal lead" id="desc">Oops!!! Look like you are not authorized.</h1>
                            <p className='reason'>Please comback and log-in</p><br/>
                            <button className='back-home-bnt' onClick={() =>(history.push('/')) }>Back to Home</button>
                        </div>
                    
                 </div>
            );
}

export default ForbiddenPage;