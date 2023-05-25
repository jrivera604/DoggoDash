import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingButton({ receiverId }) {
  const { user, isLoading } = useUser();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBooking = async () => {
    if (!user) {
      // Redirect to the login page if the user is not signed in
      window.location.href = '/api/auth/login';
      return;
    }

    const senderId = user.email; // Use the user's email as the senderId

    try {
      // Perform the API call to create a booking
      const response = await fetch('/api/createBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          selectedDate,
        }),
      });

      if (!response.ok) {
        console.error('Error creating booking:', response.statusText);
        return;
      }

      const data = await response.json();
      console.log(data);
      // Handle the response and any UI updates
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <h1>Select Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
}
