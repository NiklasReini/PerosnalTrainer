import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';

export default function Carlist() { 
    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm("Do you want to delete training?")){
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
           }
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
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button size='small' color='secondary' onClick={() => deleteCustomer(row.value)}>Delete</Button>
         },      
    ]

    return(
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />

        </div>
    );
}