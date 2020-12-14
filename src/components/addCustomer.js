import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] =React.useState({
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
    })
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };   
    
    const handleInputChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    const addCustomer = () => {
        props.saveCustomer(customer);
        handleClose();
    }
   
    return(
        <div>
    <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a customer
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.brand}
            onChange={e => handleInputChange(e)}
            label="First Name"
            fullWidth
          />
           <TextField
            margin="dense"
            name="lastname"
            value={customer.model}
            onChange={e => handleInputChange(e)}
            label="Last Name"
            fullWidth
          />
           <TextField
            margin="dense"
            name="streetaddress"
            value={customer.fuel}
            onChange={e => handleInputChange(e)}
            label="Stree address"
            fullWidth
          />
           <TextField
            margin="dense"
            name="postcode"
            value={customer.price}
            onChange={e => handleInputChange(e)}
            label="Post code"
            fullWidth
          />
           <TextField
            margin="dense"
            name="city"
            value={customer.price}
            onChange={e => handleInputChange(e)}
            label="City"
            fullWidth
          />
           <TextField
            margin="dense"
            name="email"
            value={customer.price}
            onChange={e => handleInputChange(e)}
            label="Email"
            fullWidth
          />
           <TextField
            margin="dense"
            name="phone"
            value={customer.price}
            onChange={e => handleInputChange(e)}
            label="Phone"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}