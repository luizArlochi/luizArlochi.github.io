import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useDeviceType } from '../utils/devicesTypes';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="
          w-full
          bg-gradient-to-r from-green-500 via-purple-500 to-pink-500
          p-[1px]
          rounded-[20px]
          shadow-card
        "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="
            bg-indigo-950
            rounded-[20px]
            py-5
            px-12
            min-h-[280px]
            flex
            justify-evenly
            items-center
            flex-col
            bg-opacity-95
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="
            text-white
            text-[20px]
            font-bold
            text-center
          "
          >
            {title}
          </h3>
        </div>

      </motion.div>

    </Tilt>
  )
};


const About = () => {
  const { isMobile } = useDeviceType();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-4
          text-secondary
          text-[17px]
          max-w-3xl
          leading-[30px]
        "
      >
        Proficient in a wide range of technical skills, including JavaScript, TypeScript, Python, SH/Bash Terminal, Linux, Git, HTML5/CSS, React.js, Docker, Django, Mongo, Flask, MySQL and others. I have a solid grounding in programming logic, responsive web design and testing frameworks such as Jest. Familiarity with agile methodologies, including Scrum, and project management tools such as Trello and jira. Ability to clean-code and use Docker for efficient development. In addition to technical skills, I possess a strong set of interpersonal skills, including cognitive flexibility, ease of learning and problem-solving skills. My critical thinking skills and goal orientation ensure efficient project execution.
      </motion.p>
      <div className={`
      mt-20
      flex
      flex-wrap
      gap-10
      ${isMobile ? 'justify-center' : ''}
    `}>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
};

export default SectionWrapper(About, "about");