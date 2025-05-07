import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const SimpleMap = () => {
    const position = [51.505, -0.09]; // London example

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A marker in London. <br /> You can customize this.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default SimpleMap;
