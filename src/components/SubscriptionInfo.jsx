import React from 'react';
import './SubscriptionInfo.css';

function SubscriptionInfo() {
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
            <a
                href="https://wa.me/15551234567?text=Hello%20Baiana%20Braids%20Team.%20I%20am%20interested%20in%20joining%20your%20subscription%20plan."
                className="subscribe-button"
                target="_blank"
                rel="noopener noreferrer"
                >
                Enroll via WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionInfo;
