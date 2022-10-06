import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Base from './Components/side';
import {story} from './Components/side_story';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App  from './Components/canvas'
import {Mappage, Homepage} from './Components/map'
import Landings from './Components/landing'

import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Homepage/>
    <Mappage/>       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
