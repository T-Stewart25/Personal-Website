import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import CSU from "../assets/CSU.png";
import Lavner from "../assets/Lavner.png";
import Neurology from "../assets/Neurology.png";

const Card = ({ children }) => {
  const eleRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const wasInView = usePrevious(isInView);

  useEffect(() => {
    const checkInView = () => {
      const ele = eleRef.current;
      if (!ele) {
        return;
      }
      const rect = ele.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    checkInView();

    const scrollListener = () => {
      checkInView();
    };

    const resizeListener = () => {
      checkInView();
    };

    document.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", resizeListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const ele = eleRef.current;
    if (!ele) {
      return;
    }
    if (!wasInView && isInView) {
      ele.classList.add("card__animated");
    }
  }, [isInView]);

  return (
    <div className="card" ref={eleRef}>
      {children}
    </div>
  );
};

const Work = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h3 className={styles.sectionHeadText}>Experience Timeline.</h3>
      <div className="w-20 h-20 rounded-full bg-[#b927c3]" />
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider grid">
            May 2022 - August 2022 -
          </p>
          <div className="line" />
          <Card
            className="flex flex-col justify-center items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
            >
              <img
                src={Lavner}
                alt="Lavner Thumbnail"
                className="w-1/3 mx-auto"
              />
              <p className="text-center sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
                Lavner Education, Denver CO
              </p>
              <p className="text-center sm:text-[14px] text-[10px] text-secondary uppercase tracking-wider">
                IT Intern
              </p>
              <p className="text-center sm:text-[12px] text-[8px] text-white tracking-wider">
                During my first summer in college, I was fortunate to work in a
                role that was pivotal in ensuring the smooth operation of
                Lavner's summer camp. My primary responsibilities revolved
                around ensuring that the camp's computers experienced no
                hardware or software problems. This responsibility exposed me to
                numerous concepts that were previously unfamiliar to me and
                introduced me to a plethora of new diagnostic tools. In this
                role, I quickly learned how to troubleshoot and resolve issues
                efficiently, using various diagnostic tools and techniques. This
                hands-on experience not only expanded my knowledge base but also
                provided me with a solid foundation in IT support. Furthermore,
                this position taught me the importance of quick thinking and
                adaptability in addressing unforeseen challenges. It was a
                valuable learning experience that laid the groundwork for my
                future endeavors in IT, computers, and problem solving.{" "}
              </p>
            </div>
          </Card>
        </div>
        <div className="flex flex-row items-center">
          <Card
            className="flex flex-col justify-center items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
            >
              <img src={CSU} alt="CSU Thumbnail" className="w-full" />
              <p className="text-center sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
                Colorado State University, Fort Collins CO
              </p>
              <p className="text-center sm:text-[14px] text-[10px] text-secondary uppercase tracking-wider">
                Undergraduate Teacher's Assistant
              </p>
              <p className="text-center sm:text-[12px] text-[8px] text-white tracking-wider">
                During my sophomore year of college, I had the opportunity to
                serve as a Teacher's Assistant for CS-150b. This role not only
                helped me in honing my Python skills but also provided a
                platform to learn and appreciate diverse solutions from the
                students I was assisting. As a Teacher's Assistant, I was tasked
                with facilitating and leading labs and exams, ensuring that each
                session was conducted in a safe and inclusive environment
                conducive to learning. I was also responsible for aiding
                students who were struggling with their assigned programs,
                guiding them to develop fundamental code reading and writing
                skills. Moreover, I actively contributed to the development of
                Python labs, practice questions, and quiz questions, which
                further solidified my understanding of the language and its
                applications. This role significantly contributed to my growth
                as a Python programmer and provided me with valuable teaching
                and mentorship experience.{" "}
              </p>
            </div>
          </Card>

          <div className="line" />
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider grid">
            - August 2022 - May 2023
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider grid">
            May 2023 - August 2023 -
          </p>
          <div className="line" />
          <Card
            className="flex flex-col justify-center items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
            >
              <img
                src={Neurology}
                alt="Neurology Thumbnail"
                className="w-1/4 mx-auto"
              />
              <p className="text-center sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
                National Neurology, Denver CO
              </p>
              <p className="text-center sm:text-[14px] text-[10px] text-secondary uppercase tracking-wider">
                Network Contractor
              </p>
              <p className="text-center sm:text-[12px] text-[8px] text-white tracking-wider">
                During my sophomore year summer, I was deeply engaged in
                creating robust and adaptable work solutions for companies. My
                primary focus was on collaborating with National Neurology, an
                organization striving to establish remote virtual machine
                servers, enabling employees to seamlessly utilize their on-site
                network resources. Notably, I managed to surpass their
                expectations by achieving their goal with remarkable efficiency,
                utilizing less than half of the allotted budget. This feat was
                accomplished while ensuring the full functionality of the
                system. My approach involved developing a scalable virtual
                machine solution that could accommodate a substantial number of
                virtual machines. Each virtual machine was designed to possess
                ample computational power to facilitate the tasks that needed to
                be performed effectively.
              </p>
            </div>
          </Card>
        </div>
        <div className="flex flex-row items-center">
          <Card
            className="flex flex-col justify-center items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{ maxWidth: "100%", maxHeight: "100%", overflow: "auto" }}
            >
              <img src={CSU} alt="CSU Thumbnail" className="w-full" />
              <p className="text-center sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
                Colorado State University, Fort Collins CO
              </p>
              <p className="text-center sm:text-[14px] text-[10px] text-secondary uppercase tracking-wider">
                Lead Undergraduate Teacher's Assistant
              </p>
              <p className="text-center sm:text-[12px] text-[8px] text-white tracking-wider">
                During my time as a Lead Undergraduate Teaching Assistant, I had
                the opportunity to develop a wide array of leadership and soft
                skills while also deepening my understanding of coding and
                Python programming. Guiding students as they embarked on their
                Python programming journey taught me invaluable skills in
                communication, patience, and adaptability. I learned to cater to
                diverse learning styles and adapt my teaching methods
                accordingly. Additionally, I developed strong problem-solving
                abilities as I assisted students with their coding challenges,
                helping them refine their code comprehension and coding
                abilities. This role allowed me to grow both personally and
                professionally, equipping me with the necessary tools to excel
                in my future endeavors, both in coding and leadership roles.
              </p>
            </div>
          </Card>
          <div className="line" />
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider grid">
            - August 2023 - Present
          </p>
        </div>
      </div>
      <div className="w-1 h-80 violet-gradient flex items-center justify-center" />
    </div>
  );
};

export default SectionWrapper(Work, "work");
