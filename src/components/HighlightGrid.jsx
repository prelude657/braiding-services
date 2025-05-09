import React from 'react';
import './HighlightGrid.css';

function HighlightGrid() {
  return (
    <div className="highlight-grid">
      <div className="grid-box text-box">
        <h2>Discover Styles</h2>
            <p>
                Explore our signature styles designed to highlight your natural beauty and 
                reflect your personal elegance. From timeless braids to bold, modern twists, 
                each look is crafted with precision, care, and creativity. 
                Whether you're preparing for a special occasion or simply want to refresh your everyday style, 
                our talented stylists are here to bring your vision to life with confidence and flair.
            </p>

      </div>
      <div className="grid-box image-box">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" 
          alt="Style 2" 
        />
      </div>
      <div className="grid-box image-box">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" 
          alt="Style 2" 
        />
      </div>
      <div className="grid-box text-box">
        <h2>Your Perfect Look</h2>
            <p>
                Whether you’re drawn to elegant updos, bold statement braids, or soft natural textures, 
                we are passionate about bringing your unique hair vision to life. 
                Our experienced stylists combine artistry with precision to ensure every 
                detail reflects your personality and enhances your confidence. 
                With expert care and a commitment to excellence, 
                we create styles that not only turn heads but also nurture 
                the health and beauty of your hair.
    </p>
      </div>
    </div>
  );
}

export default HighlightGrid;
