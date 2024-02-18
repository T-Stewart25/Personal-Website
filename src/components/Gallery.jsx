import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { styles } from '../styles';

import One from '../assets/Gallery/One.pdf';
import Two from '../assets/Gallery/Two.pdf';
import Three from '../assets/Gallery/Three.pdf';
import Four from '../assets/Gallery/Four.pdf';
import Five from '../assets/Gallery/Five.pdf';
import Six from '../assets/Gallery/Six.pdf';
import Seven from '../assets/Gallery/Seven.pdf';
import Eight from '../assets/Gallery/Eight.pdf';
import Nine from '../assets/Gallery/Nine.pdf';
import Ten from '../assets/Gallery/Ten.pdf';
import Eleven from '../assets/Gallery/Eleven.pdf';
import Twelve from '../assets/Gallery/Twelve.pdf';

const ImageGallery = () => {
  const [images] = useState([
    { src: One, alt: 'One' },
    { src: Two, alt: 'Two' },
    { src: Three, alt: 'Three' },
    { src: Four, alt: 'Four' },
    { src: Five, alt: 'Five' },
    { src: Six, alt: 'Six' },
    { src: Seven, alt: 'Seven' },
    { src: Eight, alt: 'Eight' },
    { src: Nine, alt: 'Nine' },
    { src: Ten, alt: 'Ten' },
    { src: Eleven, alt: 'Eleven' },
    { src: Twelve, alt: 'Twelve' },
  ]);

  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxIsOpen(true);
  };

  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      <h2 className={`${styles.sectionHeadText} justify-center`}>Life-Style.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ border: '1px solid #000', padding: '10px' }}>
            <img src={image.src} alt={image.alt} onClick={() => openLightbox(index)} />
          </div>
        ))}
      </div>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex].src}
          nextSrc={images[(lightboxIndex + 1) % images.length].src}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setLightboxIsOpen(false)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default ImageGallery;
