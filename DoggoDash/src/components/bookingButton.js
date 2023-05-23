import React from 'react';

export default function BookingButton({ senderId, receiverId }) {
  const handleBooking = async () => {
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
          // Additional booking data if needed
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

  return <button onClick={handleBooking}>Book</button>;
}
