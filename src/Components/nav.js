import React from 'react'

const Icon = (props) => {
    return(
        <a className='nav_icon_box' target={props.target} href= {props.linkID}><img className='nav_icon' src={props.source} title={props.title} alt={props.alt}/></a>
        
    )
};

const NavBar = (props) => {
    return(
        <div className='nav_side'>
            <div className='navbar vert'>
                <div/>
                <Icon linkID={props.dest1} target={props.target} source={props.src1} title={props.title1} alt={props.alt1} />
                <Icon linkID={props.dest2} target={props.target} source={props.src2} title={props.title2} alt={props.alt2}/>
                <Icon linkID={props.dest3} target={props.target} source={props.src3} title={props.title3} alt={props.alt3}/>
                <div/>
            </div>
        </div>
    )
}

const NavBar_Hor = (props) =>{
    return(
        <div className='nav_top'>
            <div className='navbar hor'>
                <div/>
                <Icon linkID={props.dest1}source={props.src1} title={props.title1} alt={props.alt1} />
                <Icon linkID={props.dest2} source={props.src2} title={props.title2} alt={props.alt2}/>
                <Icon linkID={props.dest3} source={props.src3} title={props.title3} alt={props.alt3}/>
                <div/>
            </div>
        </div>

    )
}

export {NavBar, NavBar_Hor}