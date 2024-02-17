import React from "react";
import ReactPlayer from "react-player";
import TableVideo from "../assets/Table.mp4"; // Import the video file outside of the component
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function Table() {
  return (
    <div>
      <div className="containerVid">
        <h1 className={styles.sectionHeadText}>
          Proof of Concept of Automatic Drink Table.
        </h1>
        <h2 className={styles.sectionSubText}>
          Some portions have been sped for demonstration
        </h2>
        <div className="video-wrapper">
          <ReactPlayer
            url={TableVideo} // Use the imported variable directly
            controls
            width="800px"
            height="450px"
            preload="metadata"
          />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl justify-center items-center"
      >
        Currently, the project is on pause as I'm working on rebuilding the
        table with a stronger and more practical design. Instead of using slow,
        food-safe pumps, I plan to switch to ones commonly found in drink
        dispensers for better performance. The dispenser nozzle is controlled by
        a servo motor. The movement of the cup is being done by a linear
        actuator but a quiter, quicker solution is in the works. All this is
        managed by motor controllers and an Arduino microcontroller, with the
        software for the table being written in C++.{" "}
      </motion.p>
    </div>
  );
}

export default SectionWrapper(Table, "");
