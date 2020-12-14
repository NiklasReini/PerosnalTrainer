import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import CustomerList from './CustomerList';

export default function AddTraining(props) {

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '', duration: '', activity: '', customer: props.params.value
    })
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };   
    
    const handleInputChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value})
    }

    const addTraining = () => {
        props.saveTraining(training);
        handleClose();
    }
   
    return(
        <div>
    <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Training</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="id"
            value={training.id}
            onChange={e => handleInputChange(e)}
            label="ID"
            fullWidth
          />
          <TextField
            id="date"
            type="date"
            autoFocus
            margin="dense"
            name="date"
            value={training.date}
            onChange={e => handleInputChange(e)}
            label="Date"
            fullWidth
          />
           <TextField
            margin="dense"
            name="duration"
            value={training.duration}
            onChange={e => handleInputChange(e)}
            label="Duration"
            fullWidth
          />
           <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={e => handleInputChange(e)}
            label="Activity"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}