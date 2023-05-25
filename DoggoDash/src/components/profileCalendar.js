
import { useState } from 'react';
import Calendar from 'react-calendar';

export default function ProfileCalendar({ sitterAvailability }) {
  const [date, setDate] = useState(new Date());
console.log(sitterAvailability.startDate, sitterAvailability.endDate)
  
  return (
    <div className='app'>
   
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Available From:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>To</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

