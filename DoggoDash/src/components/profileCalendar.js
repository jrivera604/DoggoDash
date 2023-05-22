import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';


export default function ProfileCalendar ({sitterAvailability}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  useEffect(() => {
    // Set the initial values based on the provided start and end dates
    setStartDate(new Date(`${sitterAvailability.availabilityStart}`));
    setEndDate(new Date(`${sitterAvailability.availabilityEnd}`));
  }, []);

 
  return (
    <div className='app'>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"'>Availability</h1>
      <div className='calendar-container'>
        <Calendar
          className='react-calendar'
          value={[startDate, endDate]}
        />
      </div>
    </div>
  );
}


