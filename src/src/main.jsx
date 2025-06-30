import React from 'react';
import BookingFlow from './BookingFlow';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Safaai Booking App</h1>
      <BookingFlow />
    </div>
  );
}

export default App;
