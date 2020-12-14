import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import React, {useState, useEffect} from 'react';

export default function MyCalendar(){
  
  const localizer = momentLocalizer(moment)

  useEffect(() => fetchData(), [])

  const[trainings, setTrainings] = useState([]);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')  
    .then(response => response.json())
    .then(data => setTrainings(data))
}

  

  return (
    <div style={{ height: 580, margin: 10 }}>
      <Calendar 
      localizer={localizer} 
      defaultView='month'
      views={['month','week','day','agenda']}
      events={trainings}
      
      titleAccessor={(event) => 
          event.activity + " with " + event.customer.firstname
      }
      startAccessor={(event) => 
        moment(event.date).toDate()
      }
      endAccessor={(event) => 
        moment(event.date).add(event.duration,"minutes").toDate()
     }
      />
    </div>
  );
 
}


