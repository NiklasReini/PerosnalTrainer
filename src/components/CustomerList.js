import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import AddCustomer from './addCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './addTraining';

export default function CustomerList() { 
    const[customer, setCustomer] = useState([]);
    const [customerTrainings, setCustomerTrainings] = useState([]);
    useEffect(() => fetchData(), [])
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm("Do you want to delete customer?")){
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
           }
        }
    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
            .then(res => fetchData())
            .catch(err => console.error(err))
    }
    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    const saveTraining = (training, customer) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(training, customer)
            })
            .then(res => fetchData())
            .catch(err => console.error(err))
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
            width: 200,
            accessor: 'links[0].href',
            Cell: params => <AddTraining saveTraining={saveTraining} params={params}/>
         },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
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
            <AddCustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customer} columns={columns} />

        </div>
    );
}