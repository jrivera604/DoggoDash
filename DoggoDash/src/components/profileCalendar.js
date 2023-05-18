import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';


export default function ProfileCalendar () {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 id='calendarTitle' className='text-3xl tracking-tight text-gray-800'>Availability</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
     
    </div>
  );
}

