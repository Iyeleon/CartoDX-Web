import React from 'react'
import App from './canvas'
import {NavBar} from './nav'
import Landings from './landing'
import Base from './side'
import {story} from './side_story';


const Mappage = ()=>{
    return(
        <div id='mappage' className='container'>
            <>
                <App/>,
                <Base title={story[0].title} info={story[0].info} details={story[0].details}/>
                <NavBar dest1='#landing' 
                        dest2='#mappage' 
                        src1={require('./../icons/web_icons-01.png')} title1={'Go to Homepage'}
                        src2={require('./../icons/web_icons-05.png')} title2={'Go to Methodology'}
                        src3={require('./../icons/web_icons-03.png')} title3={'Upload an Image'}
                        alt1={'Home}'}
                        alt2={'Method'}
                        alt3={'Custom'}/>
            </>

        </div>

    );
}

const Homepage = () =>{
    return(
    <div id='landing' className='container'>
        <Landings/>
    </div>


    )
}

export {Mappage, Homepage}