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
          Some portions have been sped for demonstration. This table, made from
          scratch, acts as a drink dispenser that fills inside of the table. It
          lowers a cup inside of the table, dispenses liquid, and raises the cup
          again.
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
        The dispenser nozzle will continue to be operated by a servo motor.
        Additionally, while the cup's movement is currently facilitated by a
        linear actuator, I am exploring alternative solutions for a more quick
        and quiet operation. These systems are controlled by motor controllers
        and an Arduino microcontroller, with the table's software programmed in
        C++.{" "}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl justify-center items-center"
      >
        {" "}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl justify-center items-center"
      >
        A significant obstacle for this project was my limited understanding of
        the core concepts. As a student, I had access to a wealth of resources,
        which allowed me to familiarize myself with the necessary concepts and
        develop a prototype of the table. Beyond the initial knowledge gap,
        additional challenges arose when dispensing liquid into a cup while
        simultaneously requiring the cup to be moved to the nozzle's position.
        This dilemma was resolved by incorporating a servo motor, which
        positions the nozzle above the cup, withdraws it, and then repositions
        the cup before dispensing.{" "}
      </motion.p>
    </div>
  );
}

export default SectionWrapper(Table, "");
