import React from 'react';
import ResumePDF from '../assets/Resume.pdf'; // Assuming Resume.pdf is located in the assets folder
import ResumeImage from '../assets/Resume.png'; // Assuming Resume.png is located in the assets folder
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Works = () => {
  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 className={`${styles.sectionHeadText} justify-center`}>Resume</h2>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative' }}>
          <img src={ResumeImage} alt="Resume Thumbnail" style={{ width: '100%', borderRadius: '5px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px 20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontSize: '24px' }}>Resume</div>
        </div>
      </a>
    </div>
  );
}

export default SectionWrapper(Works,"work");
