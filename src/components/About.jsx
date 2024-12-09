/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 30,
          scale: 1,
          speed: 500,
        }}
        className='bg-tertiary css-selector rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
  <>  
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Hi, I'm Soaham Sur, a passionate Engineer with a knack for developing & building new things. With a background in programming, I specialize in web development,AI/ML,DSA . My work reflects a commitment to user-centric design, and I thrive on solving complex problems through code and learning new technologies. Welcome to my portfolio—let's create something amazing together!      </motion.p>

      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
  </>
  )
}

export default SectionWrapper(About,"about")