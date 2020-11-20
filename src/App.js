import './App.css';
import TrainingList from './components/TrainingList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <div >
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Training List
          </Typography>
        </Toolbar>
      </AppBar>
      <TrainingList />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Customer List
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomerList />
    </div>
  );
}

export default App;
