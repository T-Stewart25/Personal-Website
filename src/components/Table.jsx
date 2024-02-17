import React from 'react';
import ReactPlayer from 'react-player';
import TableVideo from '../assets/Table.mp4'; // Import the video file outside of the component
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

function Table() {
  return (
    <div className="containerVid">
      <h1 className={styles.sectionHeadText}>
        Proof of Concept of Automatic Drink Bar.
      </h1>
      <h2 className={styles.sectionSubText}>
        Some portions have been speed for demonstration
      </h2>
        <div className="video-wrapper">
          <ReactPlayer
            url={TableVideo} // Use the imported variable directly
            controls
            width="800px"
            height="450px"
          />
        </div>
    </div>
  );
}

export default SectionWrapper(Table, "");