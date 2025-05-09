import React, { useState } from 'react';
import './HairBraidingServices.css';
import ServiceHeader from './ServiceHeader';

const services = [
  { 
    name: 'Box Braids', 
    description: 'Box Braids are neatly sectioned braids that offer a versatile and long-lasting protective style. They are ideal for creating a range of looks and can be styled up or down for any occasion.', 
    price: '$150', 
    images: ['https://picsum.photos/id/1011/400/300', 'https://picsum.photos/id/1012/400/300']
  },
  { 
    name: 'Cornrows', 
    description: 'Cornrows are braids that lie close to the scalp in sleek, linear or curved patterns. They’re great for low-maintenance styling and can be worn alone or as a base for other styles.', 
    price: '$120', 
    images: ['https://picsum.photos/id/1013/400/300', 'https://picsum.photos/id/1014/400/300']
  },
  { 
    name: 'Senegalese Twists', 
    description: 'Senegalese Twists are silky, rope-like braids created using synthetic extensions. They provide a refined and polished look while protecting your natural hair.', 
    price: '$180', 
    images: ['https://picsum.photos/id/1015/400/300', 'https://picsum.photos/id/1016/400/300']
  },
  { 
    name: 'Havana Twists', 
    description: 'Havana Twists are chunkier and fluffier twists that offer volume and a natural finish. They’re lightweight and perfect for those who love a bold, fuller hairdo.', 
    price: '$160', 
    images: ['https://picsum.photos/id/1017/400/300', 'https://picsum.photos/id/1018/400/300']
  },
  { 
    name: 'Micro Braids', 
    description: 'Micro Braids are tiny, intricate braids that allow for extreme styling flexibility. Though time-intensive, they’re highly durable and give a very natural appearance.', 
    price: '$200', 
    images: ['https://picsum.photos/id/1019/400/300', 'https://picsum.photos/id/1020/400/300']
  },
  { 
    name: 'Goddess Braids', 
    description: 'Goddess Braids are large, elegant braids that often include curved designs or stylish updos. They’re perfect for formal events or everyday glam.', 
    price: '$175', 
    images: ['https://picsum.photos/id/1021/400/300', 'https://picsum.photos/id/1022/400/300']
  },
  { 
    name: 'Lemonade Braids', 
    description: 'Lemonade Braids are side-swept cornrows made popular by Beyoncé. This trendy look is both edgy and classic, with many styling variations.', 
    price: '$130', 
    images: ['https://picsum.photos/id/1023/400/300', 'https://picsum.photos/id/1024/400/300']
  },
  { 
    name: 'Faux Locs', 
    description: 'Faux Locs mimic the appearance of natural dreadlocks using synthetic hair. They offer a loc’d look without long-term commitment and come in various lengths and textures.', 
    price: '$220', 
    images: ['https://picsum.photos/id/1025/400/300', 'https://picsum.photos/id/1026/400/300']
  },
  { 
    name: 'Knotless Braids', 
    description: 'Knotless Braids start with your natural hair, which reduces tension on the scalp. This technique results in a lightweight, more comfortable braid style.', 
    price: '$170', 
    images: ['https://picsum.photos/id/1027/400/300', 'https://picsum.photos/id/1028/400/300']
  },
  { 
    name: 'Feed-in Braids', 
    description: 'Feed-in Braids gradually add hair extensions for a flat, seamless look. They’re natural-looking and cause less stress on your edges and roots.', 
    price: '$150', 
    images: ['https://picsum.photos/id/1029/400/300', 'https://picsum.photos/id/1030/400/300']
  },
];

function HairBraidingServices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    time: '',
  });

  const service = services[selectedIndex];

  const handleWhatsApp = () => {
    let message = `Hi Baiana Braids team! I would like to book an appointment for ${service.name} (${service.price}).`;


    message += `\nPlease let me know what dates and times are available. Thank you!`;

    const phoneNumber = '5571983959413'; // Brazil number (no +)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="serviceWrapper">
      <div className="leftColumn">
        {services.map((service, index) => (
          <button
            key={index}
            className={`serviceButton ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            {service.name}
          </button>
        ))}
      </div>
      <div className="rightColumn">
        <ServiceHeader />
        <div className="serviceDescription">
          <h2>{service.name}</h2>
          <div className="serviceImages">
            <img src={service.images[0]} alt="Style 1" className="servicePhoto" />
            <img src={service.images[1]} alt="Style 2" className="servicePhoto" />
          </div>
          <p>{service.description}</p>
          <p><strong>Price:</strong> {service.price}</p>
          <div className="whatsAppButtonWrapper">
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
    </div>
  );
}

export default HairBraidingServices;
