import React from 'react'
import Landings from './landing'
import Base from './side'
import App  from './canvas'
import {story} from './side_story';


const Contents = ()=>{
    return(
        <div className='contents-container'>
            <Landings/>
            <Base title={story[0].title} info={story[0].info} details={story[0].details}/>

            
        </div>
    )
}
export default Contents