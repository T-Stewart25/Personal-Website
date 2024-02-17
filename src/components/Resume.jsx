import React from 'react';
import ResumePDF from '../assets/Resume.pdf'; // Assuming Resume.pdf is located in the assets folder
import ResumeImage from '../assets/Resume.png'; // Assuming Resume.png is located in the assets folder
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Resume = () => {
  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 className={`${styles.sectionHeadText} justify-center`}>Resume</h2>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <img src={ResumeImage} alt="Resume Thumbnail" style={{ width: '100%', borderRadius: '5px' }} />
      </a>
    </div>
  );
}

export default SectionWrapper(Resume, "resume");
