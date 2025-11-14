import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, useReducedMotion } from "framer-motion";


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => {
  const prefersReduced = useReducedMotion();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltEnable={!isMobile && !prefersReduced}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      scale={1.02}
      transitionSpeed={900}
      glareEnable={!isMobile}
      glareMaxOpacity={0.12}
      glareBorderRadius="20px"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.4, prefersReduced ? 0 : 0.75)}
        className="group w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-br from-[#915EFF33] via-transparent to-[#915EFF22]"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly 
                        ring-1 ring-white/10 group-hover:ring-[#915EFF]/40 transition">
          <img src={icon} alt="service-icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <p className="text-secondary text-[14px] text-center mt-2
               opacity-0 group-hover:opacity-100 transition duration-300
               sm:opacity-0 sm:group-hover:opacity-100
               max-w-[220px]">
  {description}
</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I’m a data-driven developer focused on automation, analytics, and intelligent web solutions.
Currently part of the City of Calgary’s Supply Management team, I build tools that streamline procurement processes through Power Automate, Python, and data integration.
With a strong foundation in computer science and real-world experience in dashboards, APIs, and Power Platform development, I enjoy turning complex data into clear, actionable insights.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");