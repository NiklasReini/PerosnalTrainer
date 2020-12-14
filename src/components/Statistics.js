import React, {useState, useEffect} from 'react';
import {
    BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceArea,
    XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Rectangle, ResponsiveContainer 
  } from 'recharts';

import _ from 'lodash';


export default function Statistics() {

    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])

    const formatData = (data) => {
        let statistics = _(data).groupBy('activity').map((objs, key) => 
                             ({
                                'activity': key,
                                'duration': _.sumBy(objs, 'duration') 
                            })).value();
        console.log(statistics);
        return statistics;
    };

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => formatData(data.content))
        .then(stat => setTrainings(stat))
    }

   

    return(
        <div>
            <div>
            <ResponsiveContainer width="80%" height={550}>
            <BarChart data={trainings} margin={{ top: 40, right: 30, left: 20, bottom: 0 }} >
                <XAxis dataKey="activity"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="duration" fill="#ff7300"/>
                <Tooltip />
                <Legend />
                
            </BarChart>
            </ResponsiveContainer>
            </div>      
        </div>
    );
}