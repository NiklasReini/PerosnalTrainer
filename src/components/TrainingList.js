import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

export default function Carlist() { 
    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }
 
    const columns = [
        {
          Header: 'Date',
          accessor: 'date',
          Cell: props => moment(props.value).format('MMMM Do YYYY, h:mm:ss a'),
         
        },
        {
            Header: 'Duration',
            accessor: 'duration',
            Cell: props => props.value + " minutes",
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },         
    ]
    return(
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}