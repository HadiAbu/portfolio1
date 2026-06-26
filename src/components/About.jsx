import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, socialLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{ max: 45, scale: 1, speed: 450 }}
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary opacity-80 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white  text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Fullstack AI Engineer with a background that spans automation
        engineering at Cisco, frontend development at Colabo, Polar, and
        Ellipsis Drive, and now building end-to-end AI-powered applications.
        I work across the full stack — React and TypeScript on the frontend,
        Python and FastAPI on the backend, and LLM integrations, vector search,
        and cloud deployments (Docker, AWS) to ship intelligent products from
        idea to production.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <span className="font-thin text-2xl">Links:</span>
        <br />
        {socialLinks?.map((link, i) => (
          <span key={i}>
            <a href={link.link} className="text-quadrary" target="_blank">
              <span className="underline text-white">{link.name}</span>
            </a>
            <span>, </span>
          </span>
        ))}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
