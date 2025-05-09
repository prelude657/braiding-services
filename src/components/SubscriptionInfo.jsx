import React from 'react';
import './SubscriptionInfo.css';

function SubscriptionInfo() {

  const handleWhatsApp = () => {
    let message = `Hi Baiana Braids team! I heard about your subscription service!`;


    message += `\nPlease send me more information. Thank you!`;

    const phoneNumber = '5571983959413'; // Brazil number (no +)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };


  return (

    
    <div className="subscription-container">
      <div className="subscription-content">
        <h2>Loyalty Braiding Subscription</h2>
        <p>
          Discover the beauty of effortless style with our exclusive <strong>Hair Braiding Subscription Plan</strong>, specially designed for our most loyal clients. Whether you maintain a regular look or love switching things up seasonally, our subscription ensures your hair is always fresh, protected, and styled to perfection.
        </p>
        <p>
          For a fixed monthly rate, enjoy up to <strong>two premium braiding sessions</strong> per month, priority booking access, and exclusive member-only discounts on specialty styles and treatments. Our plan is ideal for clients who want consistent, healthy styling without the hassle of last-minute scheduling or fluctuating prices.
        </p>
        <p>
          You'll also receive complimentary touch-up appointments between styles and a free deep-conditioning treatment every third month to keep your hair nourished and strong. Subscriptions are flexible and can be paused or upgraded at any time.
        </p>
        <p>
          Join our community of beautiful, confident women who trust us not only to style their hair — but to care for it with the consistency it deserves.
        </p>
        <div className='subscription-whatsapp'>
           <button className="whatsAppButton" onClick={handleWhatsApp}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/60/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsAppIcon"
              />
              Contact via WhatsApp
            </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionInfo;
