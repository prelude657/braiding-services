import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
      const data = await res.json();
      setImages(data.map(img => img.download_url));
    };
    fetchImages();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="galleryWrapper">
      <div className="galleryStatic">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Photo ${idx}`}
            className="galleryImage"
            onClick={() => openModal(url)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded" className="modalImage" />
            <button className="closeButton" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
