import InfiniteCarousel from './InfiniteCarousel';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
// import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-8 text-cyber"
            >
              About Me
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed"
            >
             Second-year Computer Science student at Lahore University of Management Sciences (LUMS), Class of 2028, with strong foundations in software development, data science, and machine learning. Proficient in Python, C++, JavaScript, HTML/CSS, SQL, and React.js, with experience building scalable web applications, predictive analytics models, and AI-driven solutions for fintech and healthcare domains. Skilled in transforming complex datasets into actionable insights, developing REST APIs, and implementing end-to-end machine learning pipelines. Recognized for academic excellence and a track record of delivering high-quality, results-oriented projects.

            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              When I’m not crafting code or diving into the world of AI, you’ll likely find me on the football field—training, competing, and chasing the game I’m deeply passionate about. Otherwise, I’m probably unwinding with my guitar, exploring creativity through music.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <motion.div
                variants={iconVariants}
                // className="glass-card p-6 rounded-lg text-center electric-hover"
              >
                {/* <FaCode className="text-3xl text-primary mx-auto mb-3" /> */}
                {/* <h3 className="text-lg font-semibold text-foreground mb-2">Clean Code</h3> */}
                {/* <p className="text-sm text-muted-foreground">Writing maintainable and scalable solutions</p> */}
              </motion.div>

              <motion.div
                // variants={iconVariants}
                // className="glass-card p-6 rounded-lg text-center electric-hover"
              >
                {/* <FaLightbulb className="text-3xl text-accent mx-auto mb-3" /> */}
                {/* <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3> */}
                {/* <p className="text-sm text-muted-foreground">Always exploring new technologies and ideas</p> */}
              </motion.div>

              <motion.div
                // variants={iconVariants}
                // className="glass-card p-6 rounded-lg text-center electric-hover"
              >
                {/* <FaRocket className="text-3xl text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimizing for speed and user experience</p> */}
              </motion.div>
            </motion.div>
          </div>

          

          {/* Visual Element */}

          
          <motion.div
          
            variants={itemVariants}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-electric opacity-10 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-electric mb-4">My Journey</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-electric" />
                    <span className="text-foreground">Started with Visual Basic in Alevel</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse-electric" style={{ animationDelay: '0.5s' }} />
                    <span className="text-foreground">Explored HTML, CSS, and JS</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-electric" style={{ animationDelay: '1s' }} />
                    <span className="text-foreground">Explored game development with C++</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-electric" style={{ animationDelay: '1.5s' }} />
                    <span className="text-foreground">Currently Building Full Stack Dynamic Websites and end to end ML Models</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;