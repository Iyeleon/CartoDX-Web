import React from 'react'
import { NavBar_Hor } from './nav'
import 'tachyons'

const Logo = (props) => {
    return (
        <div className='logo'>
            <img src={require('./../icons/web_icons-11.png')} alt='CartoDx Logo' />
        </div>

    )
}

const Title = (props) => {
    return (
        <div className='landing'>
            {/* <h1>{props.title}</h1> */}
            <div className='item_nav'>
                <NavBar_Hor dest1='#landing'
                    dest2='https:'
                    dest3='https://github.com/Iyeleon/CartoDx'
                    src1={require('./../icons/web_icons-05.png')} title1={'See Guidelines & Methodology'}
                    src2={require('./../icons/web_icons-09.png')} title2={'See Project Booklet'}
                    src3={require('./../icons/GitHub-Mark-Light-64px.png')} title3={'See Project Code'}
                    alt1={'Home}'}
                    alt2={'Method'}
                    alt3={'Custom'} />
            </div>
            <div className='item'>
                <div className='title_header'>
                    
                    <h1>Kampala Malaria Vulnerability</h1>
                    <Logo />
                </div >

                <div className='title_info'>
                    <div className='details'>
                        <p>
                            This web platform is an implementation of the paper, CARTODX: Mapping Urban-Morphology-Related Vulnerabilities.
                            A research thesis project by Dami Akinniyi and Maryam Deshmukh, in fulfilment of the Masters in Advanced
                            Computation for Architecture and Design Diploma.
                        </p>

                    </div>
                </div>
                <div className='title_footer'>
                    <a href='#mappage'>
                        <button className='map_link'>Explore Map</button>
                    </a>
                </div>
            </div>
            <div className='item_footer'>
                    <div className='footer'>
                        <a href='https://iaac.net/educational-programmes/masters-programmes/macad/' target='blank' className='iaac_logo'>
                            <img src={require('../icons/IaaC Logo_White.png')} alt='IaaC Logo' title='IaaC, Barcelona' className='iaac_logo'/>
                        </a>
                        <div className='copyright'>
                            <p>MaCAD 2022</p>
                            {/* &copy; */}
                        </div>
                    </div>
                </div>
        </div>
    )
}


const request = 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/32.3704,0.3063,9.5,0/900x600@2x?setfilter=%5B%22%3D%3D%22%2C%22name_en%22%2C%22%22%5D&layer_id=settlement-label&access_token=pk.eyJ1IjoiZGFtaWFraW5uaXlpIiwiYSI6ImNqNW8xMWtlejB5bHYzMm9kYzRpdDRwcXEifQ.-LoiCYKs5kFHsnCfx9vhXA'
console.log(request)
const Static = (props) => {
    return (
        <img className='backgrd_map' src={props.request} alt='Static Map Background' />

    )
}

const Landings = () => {
    return (
        <div className='container'>
            <Title title={'CartoDx'} />
            <Static request={request} />
        </div>
    )
}

export default Landings;


