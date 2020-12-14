import React, {useState, useEffect} from 'react';
import {
    BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceArea,
    XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Rectangle, ResponsiveContainer 
  } from 'recharts';

import _ from 'lodash';


export default function Statistics() {

    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])

    const dataGroup = (data) => {

        let statistics = _(data).groupBy('activity').map((objs, key) => 

        ({'activity': key,'duration': _.sumBy(objs, 'duration') })).value();
        
        return statistics;
    };

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => dataGroup(data.content))
        .then(stat => setTrainings(stat))
    }

   

    return(
        <div>
            <div>
            <ResponsiveContainer width="100%" height={700}>
            <BarChart data={trainings} >
                <XAxis dataKey="activity"/>
                <YAxis />
                <Bar dataKey="duration" fill="blue"/>
                <Tooltip />
                <Legend />
            </BarChart>
            </ResponsiveContainer>
            </div>      
        </div>
    );
}