import React from "react";
import * as Tilt from "react-tilt"; // Import Tilt directly
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt.Tilt className="xs:w-[250px] w-full">
      {" "}
      {/* Use Tilt component directly */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt.Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a student at Colorado State University, majoring in Computer
        Science with a Concentration in Artificial Intelligence and Machine
        Learning. My academic journey has covered diverse areas of Computer
        Science, but it is in Software Development and the realm of AI and ML
        where my passion lies. I excel in languages like Python, C++, and Java,
        allowing me to create innovative solutions that address real-world
        challenges, from databases to machine learning models like
        perceptrons and cognitrons. I am particularly fascinated by the
        intersection of mathematics and computer programming, as it enables the
        creation of intelligent systems capable of data analysis, pattern
        recognition, and informed decision-making.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} /> // Use index as key
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
