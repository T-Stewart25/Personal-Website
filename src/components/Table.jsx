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
            preload="auto"
          />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl justify-center items-center"
      >
        At the moment, progress on the project has been temporarily halted as I
        am focusing on constructing a new and improved table from scratch. This
        redesigned table will utilize steel, offering a more practical, durable,
        and aesthetically pleasing design. In place of the slower, food-safe
        pumps previously employed, I am transitioning to more efficient options
        commonly found in beverage dispensers, ensuring enhanced performance.
        The dispenser nozzle will continue to be operated by a servo motor. Additionally,
        while the cup's movement is currently facilitated by a linear actuator,
        I am exploring alternative solutions for a more quick and quiet operation.
        These systems are controlled by motor controllers and an Arduino
        microcontroller, with the table's software programmed in C++.{" "}
      </motion.p>
    </div>
  );
}

export default SectionWrapper(Table, "");
