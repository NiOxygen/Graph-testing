import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Station_Map = () => {
    const position = [11.17840,124.97892];

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A marker in Tacloban. <br /> You can customize this.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Station_Map;
