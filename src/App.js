import './App.css';
import TrainingList from './components/TrainingList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomerList from './components/CustomerList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import TrainerCalendar from './components/TrainerCalendar'
import MyCalendar from './components/TrainerCalendar';
import Statistics from './components/Statistics'
function App() {

  const[value, setValue] = useState('1');

  const handleChange = (event, value) => {
      setValue(value);
  }

  return (
    
    <div >

       <AppBar position="static">
       <Tabs value={value} onChange={handleChange}>
          <Tab value="1" label="training list" />
          <Tab value="2" label="customer list" />
          <Tab value="3" label="calendar" />
          <Tab value="4" label="statstics" />
        </Tabs>
      </AppBar>
      {value === "1" && <div> <TrainingList /></div>}
      {value === "2" && <div> <CustomerList /></div>}
      {value === "3" && <div> <MyCalendar /></div>}
      {value === "4" && <div> <Statistics /></div>}

    </div>
  );
}

export default App;
