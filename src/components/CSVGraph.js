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
        <div>
            <h2>Graph from CSV</h2>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default CSVGraph;
