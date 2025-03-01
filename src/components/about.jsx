import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div 
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = ({data}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 mb-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an experienced software developer proficient in TypeScript and JavaScript, with expertise in frameworks like React, Node.js, and Three.js. As a fast learner and strong collaborator, I work closely with designers, developers and project managers, to develop efficient, scalable, and user-friendly solutions that address real-world challenges. Let's work together to bring your ideas to life!
        
      </motion.p>
      <motion.a variants={fadeIn('', '', 0.1, 1)} href='/resume/anthonia_asikpo_resume.pdf'> 
        <button
            type='button'
            className='bg-[#3d2a74] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
          >
            My Resume
          </button>
        </motion.a>
      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')