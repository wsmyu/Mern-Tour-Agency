import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import './myBooking.css';
import CommonSection from "../../shared/CommonSection";
const MyBookingPage = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const res = await fetch(`${BASE_URL}/booking/${id}`, {
          credentials: "include", 
        });
        const result = await res.json();

        if (res.ok) {
          setBookings(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError("Error fetching bookings: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    getBookings();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <CommonSection title={"My Bookings"} />
    <div className="my-booking-container">
 
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="booking-list"> 
          {bookings.map((booking) => (
            <li key={booking._id} className="booking-item"> 
              <strong>{booking.tourName}</strong> - {new Date ( booking.bookAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>

    </>
      );
};

export default MyBookingPage;