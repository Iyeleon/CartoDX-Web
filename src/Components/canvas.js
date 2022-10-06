import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFtaWFraW5uaXlpIiwiYSI6ImNsN2htajBxMjAxM3gzb3MzOTEwcjJhYnMifQ.DAW5ZX-tKOrnFlgrCoJNKg';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(32.59041823351005);
    const [lat, setLat] = useState(0.31968998820817096, );
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [lng, lat],
        zoom: zoom
        });
        });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });
             
    return (
        <div ref={mapContainer} className="map-container"/>
        );
}



