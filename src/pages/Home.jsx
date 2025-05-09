import React from 'react';
import './Home.css'; // <-- Import your CSS file here
import PhotoGallery from '../components/PhotoGallery';
import HairBraidingServices from '../components/HairBraidingServices';
import Footer from '../components/Footer';
import HighlightGrid from '../components/HighlightGrid';
import SubscriptionInfo from '../components/SubscriptionInfo';
import NewsTicker from '../components/NewsTicker';



function Home() {
  return (<>
    <div className="header">
      <h1>Where Culture Meets Craft. Step into a world where tradition and artistry intertwine.
          At Baiana Braids, we specialize in exquisite hair braiding styles that celebrate beauty,
          identity, and heritage. Whether you're looking for timeless cornrows, bold box braids, or
          elegant twists, our expert hands are here to bring your vision to life.
      </h1>
    </div>
    <NewsTicker />
    <HighlightGrid />
    <PhotoGallery></PhotoGallery>
    <HairBraidingServices></HairBraidingServices>
    <SubscriptionInfo></SubscriptionInfo>
    <Footer></Footer>
    </>
  );
}

export default Home;
