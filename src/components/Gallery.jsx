import React, { useState } from 'react';
import { styles } from '../styles';

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

  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        <h2 className={`${styles.sectionHeadText} justify-center`}>Life-Style.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ border: '3px solid #000', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
