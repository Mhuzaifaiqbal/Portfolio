
// --------------------------------------------------------------------------
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaCode
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    { icon: FaReact, name: 'React', color: 'text-blue-400' },
    { icon: FaCode, name: 'C++', color: 'text-blue-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: FaPython, name: 'Python', color: 'text-blue-600' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: SiMongodb, name: 'MySQL', color: 'text-green-600' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-600' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-electric mb-6">
            Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="glass-card p-6 rounded-xl electric-hover text-center group relative cursor-pointer overflow-visible"
                whileHover={{
                  scale: 1.1,
                  rotateY: 180,
                  transition: { duration: 0.6 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500 z-0" />

                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full animate-ping-slow z-10" />
                <div className="absolute bottom-1 right-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse-fast z-10" />

                <div className="relative z-20">
                  <Icon className={`text-4xl md:text-5xl ${skill.color} mx-auto mb-3 group-hover:animate-pulse`} />
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 z-0"
                  style={{ backfaceVisibility: 'hidden' }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={skillVariants}
            className="glass-card p-6 rounded-xl electric-hover text-center"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Frontend</h3>
            <p className="text-muted-foreground">
              Creating responsive and interactive user interfaces with modern frameworks and libraries
            </p>
          </motion.div>

          <motion.div
            variants={skillVariants}
            className="glass-card p-6 rounded-xl electric-hover text-center"
          >
            <h3 className="text-xl font-bold text-accent mb-4">Backend</h3>
            <p className="text-muted-foreground">
              Developing Backends with SQL Databases and deployment-ready pipelines
            </p>
          </motion.div>

          <motion.div
            variants={skillVariants}
            className="glass-card p-6 rounded-xl electric-hover text-center"
          >
            <h3 className="text-xl font-bold text-secondary mb-4">Researches</h3>
            <p className="text-muted-foreground">
              Collaborating on interdisciplinary research projects in healthcare, economics, and AI to generate actionable insights and impactful outcomes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


// import ScrollRow from "./ScrollRow";

// export default function SkillsSection() {
//   return (
//     <section className="w-full py-20 bg-gray-900">
//     <br /><h1 className="text-center text-4xl font-bold text-white mb-10 text-foreground">Skills</h1> <br />
//       <div className="space-y-8">
//         <ScrollRow direction={1} />
       
//       </div>
//     </section>
//   );
// }
