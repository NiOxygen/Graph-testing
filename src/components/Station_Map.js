import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import customMarker from './air.png';

const customIcon = new L.Icon({
    iconUrl: customMarker,
    iconSize: [32, 32], // width and height
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
});


const Station_Map = () => {
    const position = [11.17840,124.97892];

    return (

        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                margin: '20px auto',
                maxWidth: '800px',
                backgroundColor: '#fff',
            }}
        >
                <h3 style={{ textAlign: 'center', marginBottom: '12px' }}>Station Map View</h3>

            <div style={{ width: '100%', height: '400px' }}>
                <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.oppenstreetma.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[11.20686,125.00816]} icon={customIcon}>
                        <Popup>
                            Tacloban City Station 1. <br /> CAAQMS, Sensor-727, Sensor-729.<br />11.2068671,125.0081619
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Station_Map;
