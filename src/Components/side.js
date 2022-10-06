import React from 'react';


const Base = (props)=>{
    return (
        <div className='side_outer'>
            <div className='side '>
            <img className= 'ref' alt = 'reference image' src=''/>
            <div>
                <h2>{props.title}</h2>
                <h4>{props.info}</h4>
                <p>{props.details}</p>
            </div>
        </div>

        </div>


    )
    
}

export default Base;


