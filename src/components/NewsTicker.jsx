import React from 'react';
import './NewsTicker.css';

function NewsTicker() {
  const messages = [
    '💇‍♀️ New Styles Available Now!',
    '💎 Loyalty Discounts This Month',
    '🕒 Book Your Appointment Today!',
    '🏫 Come Join our Hair Braiding Academy',
    '🇧🇷 The Best Salon In Brazil !'

  ];

  const tickerText = messages.join('   |   ');

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        <div className="ticker-content">
          <span>{tickerText} &nbsp;&nbsp;&nbsp; {tickerText}&nbsp;&nbsp;&nbsp; {tickerText}&nbsp;&nbsp;&nbsp; {tickerText}&nbsp;&nbsp;&nbsp; {tickerText}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
