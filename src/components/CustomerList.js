import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Carlist() { 
    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }
    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        }, 
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        }, 
        {
            Header: 'Phone',
            accessor: 'phone'
        },      
    ]

    return(
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />

        </div>
    );
}