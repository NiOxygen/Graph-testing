import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
    LineChart, Line, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend
} from 'recharts';

const CSVGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.csv')
            .then(response => response.text())
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: function(results) {
                        setData(results.data);
                    }
                });
            });
    }, []);

    return (
        <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>2024 Particuate Matter in Tacloban</h2>
            <ResponsiveContainer width="100%" height={600} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PM10" barSize={40} fill="#2b8f2d" />
                <Line type="monotone" dataKey="PM10 24h Limit" stroke="#8884d8" />
            </ResponsiveContainer>
        </div>
    );
};

export default CSVGraph;
