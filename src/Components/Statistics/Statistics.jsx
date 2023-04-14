import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Statistics = () => {

    const data = [
        { id: '1', name: 'HTML CSS', mark: 57 },
        { id: '2', name: 'Responsive', mark: 30 },
        { id: '3', name: 'Bootstrap', mark: 29 },
        { id: '4', name: 'JavaScript', mark: 58 },
        { id: '5', name: 'DOM', mark: 60 },
        { id: '6', name: 'API', mark: 25 },
      //{ id: '7', name: 'Debug', mark:  },
        { id: '8', name: 'React', mark: 60 },
      ];
      
    return (
        <div className='container'>
            <ComposedChart
                width={700}
                height={400}
                data={data}
                margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mark" fill="#8884d8" />
                <Line type="monotone" dataKey="mark" stroke="#82ca9d" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;