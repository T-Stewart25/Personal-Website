import React, { useState } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import One from '../assets/Gallery/One.png';
import Two from '../assets/Gallery/Two.png';
import Three from '../assets/Gallery/Three.png';
import Four from '../assets/Gallery/Four.png';
import Five from '../assets/Gallery/Five.png';
import Six from '../assets/Gallery/Six.png';
import Seven from '../assets/Gallery/Seven.png';
import Eight from '../assets/Gallery/Eight.png';
import Nine from '../assets/Gallery/Nine.png';
import Ten from '../assets/Gallery/Ten.png';
import Eleven from '../assets/Gallery/Eleven.png';
import Twelve from '../assets/Gallery/Twelve.png';

const ImageGallery = () => {
  const images = [
    { src: Six, srcSet: Six, alt: 'Six' },
    { src: Twelve, srcSet: Twelve, alt: 'Twelve' },
    { src: Four, srcSet: Four, alt: 'Four' },
    { src: Three, srcSet: Three, alt: 'Three' },
    { src: Five, srcSet: Five, alt: 'Five' },
    { src: Seven, srcSet: Seven, alt: 'Seven' },
    { src: Ten, srcSet: Ten, alt: 'Ten' },
    { src: Eight, srcSet: Eight, alt: 'Eight' },
    { src: Two, srcSet: Two, alt: 'Two' },
    { src: Eleven, srcSet: Eleven, alt: 'Eleven' },
    { src: Nine, srcSet: Nine, alt: 'Nine' },
    { src: One, srcSet: One, alt: 'One' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePreviousClick = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        <h2 className={`${styles.sectionHeadText} justify-center`}>Life-Style.</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', overflowX: 'scroll' }}>
      <IoIosArrowBack onClick={handlePreviousClick} style={{ cursor: 'pointer' }} />
        <div key={images[currentImageIndex].src} onClick={() => openLightbox(currentImageIndex)} style={{ border: '3px solid #000', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={images[currentImageIndex].src} srcSet={images[currentImageIndex].srcSet} alt={images[currentImageIndex].alt} style={{ maxHeight: '70vh' }} />
        </div>
        <IoIosArrowForward onClick={handleNextClick} style={{ cursor: 'pointer' }} />
      </div>
      {lightboxOpen && (
        <div className="lightbox-backdrop" style={{ zIndex: 1100, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)' }} onClick={closeLightbox}>
          <div className="lightbox-content" style={{ zIndex: 1101, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: 'calc(100% - 200px)', maxHeight: 'calc(100% - 200px)', overflow: 'auto', padding: '5px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
            <img src={images[currentImageIndex].src} srcSet={images[currentImageIndex].srcSet} alt={images[currentImageIndex].alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(ImageGallery, "");
