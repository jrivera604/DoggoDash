import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function DogSitterBookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (user) {
      console.log('userId:', user.id); // Log the userId
      try {
        const senderId = user.email; // Use the user's email as the senderId
        const response = await fetch(`/api/fetchBookings?senderId=${encodeURIComponent(senderId)}`);

        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings);
        } else {
          console.error('Error fetching bookings:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user]);

  const handleAcceptBooking = async (bookingId) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to accept this booking?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const response = await fetch(`/api/acceptBooking?bookingId=${bookingId}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              if (response.ok) {
                // Handle success
                console.log('Booking accepted successfully');
                fetchBookings(); // Refetch bookings after accepting
              } else {
                console.error('Error accepting booking:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Handle cancel
            console.log('Booking acceptance canceled');
          },
        },
      ],
    });
  };

  const handleCancelBooking = async (bookingId) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to cancel this booking?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const response = await fetch(`/api/cancelBooking?bookingId=${bookingId}`, {
                method: 'DELETE',
              });

              if (response.ok) {
                // Handle success
                console.log('Booking canceled successfully');
                fetchBookings(); // Refetch bookings after canceling
              } else {
                console.error('Error canceling booking:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Handle cancel
            console.log('Booking cancellation canceled');
          },
        },
      ],
    });
  };

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Date: {booking.date}</p>
          <p>Status: {booking.status}</p>
          <p>Dog Owner: {booking.sender.firstName} {booking.sender.lastName}</p>
          <p>Dog Sitter: {booking.receiver.firstName} {booking.receiver.lastName}</p>
          <button onClick={() => handleAcceptBooking(booking.id)}>Accept</button>
          <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
