import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';


export default function ProfileCalendar ({sitterAvailability}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  
  useEffect(() => {
    // Set the initial values based on the provided start and end dates
    setStartDate(sitterAvailability.availabilityStart);
    setEndDate(sitterAvailability.availabilityEnd);
  }, []);

 
  return (
    <div className='app'>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"'>Availability</h1>
      <div className='calendar-container'>
        <Calendar
          className='react-calendar'
          style =".react-calendar .react-calendar__tile--highlight {
            background-color: #ffcc00;
            color: #fff;
          }"
          value={[startDate, endDate]}
        />
      </div>
    </div>
  );
}


