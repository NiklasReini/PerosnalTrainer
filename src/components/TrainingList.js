import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function TrainingList() { 
    const[trainings, setTrainings] = useState([]);
    useEffect(() => fetchData(), [])
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')  
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const deleteTraining = (link) => {
       if (window.confirm("Do you want to delete training?")){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
       }
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
        {
            Header: 'Customer',
            accessor: 'customer',
            Cell: props => props.value.firstname + ' ' + props.value.lastname                
        }, 
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'id',
            Cell: row => <Button size='small' color='secondary' onClick={() => deleteTraining('https://customerrest.herokuapp.com/api/trainings/' + row.value)}>Delete</Button>
         },        
    ]
    return(
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}