// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { FaGithub, FaExternalLinkAlt, FaCode, FaPlane , FaFutbol,FaGamepad, FaSpider   } from 'react-icons/fa';

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.2 });

//   const projects = [
//       {
//       id: 1,
//       title: "Airplane Management System",
//       description: "A full-stack airline seat booking system built with React and FastAPI, featuring real-time seat management, booking, and cancellation",
//       tech: ["React Frontend", "Python Backend", "FastAPI","C++","API Integration"],
//       github: "https://github.com/Mhuzaifaiqbal/Flight-Booking-System",
//       live: "#",
//       icon: FaPlane ,
//       gradient: "bg-gradient-lightning"
//     },
//     {
//       id: 2,
//       title: "2-D Snake Game",
//       description: "A fast-paced 2D Snake Game built with C++ and SFML, featuring smooth controls, dynamic growth, and real-time collision handling.",
//       tech: ["C++", "SFML", "File I/O"],
//       github: "https://github.com/Mhuzaifaiqbal/2-D-Snake-Game",
//       live: "#",
//       icon: FaGamepad ,
//       gradient: "bg-gradient-electric"
//     },
//     {
//       id: 3,
//       title: "Fifa Wc 2026 Predictor",
//       description: "An intelligent match outcome predictor using machine learning models trained on player stats, team performance, and historical data to simulate the 2026 World Cup.",
//       tech: ["Python", "Data science", "Scikit learn", "Simulation","Hybrid Simulation"],
//       github: "#",
//       live: "#",
//       icon: FaFutbol,
//       gradient: "bg-gradient-lightning"
//     },
//     {
//       id: 4,
//       title: "ML-Project Collection",
//       description: "A curated set of real-world machine learning projects applying predictive modeling, AI integration, and data-driven insights across domains like business, healthcare, and finance..",
//       tech: ["Python", "Scikit Learn", "Meta Prophet", "Keras", "Pandas","Data Science"],
//       github: "https://github.com/Mhuzaifaiqbal/Mini-Projects",
//       live: "#",
//       icon: FaCode,
//       gradient: "bg-gradient-cyber"
//     },
//     {
//       id: 5,
//       title: "Web Scraping Project Collection",
//       description: "A Collection of projects that include detailed notes and web scraping code snippets with Selenium, Bs4, and requests.",
//       tech: ["Python", "Selenium", "BS4", "Web Crawling", "Pandas","Imports"],
//       github: "https://github.com/Mhuzaifaiqbal/Selenium-Projects",
//       live: "#",
//       icon: FaSpider ,
//       gradient: "bg-gradient-cyber"
//     },
//     {
//       id: 6,
//       title: "E-Commerce Web Development",
//       description: "A Full fledge E-Commerce website made with React + Type Script, including interactive features, captivating UI and styles with an animated purple theme.",
//       tech: ["React", "Type Script", "Tailwind CSS"],
//       github: "https://github.com/Mhuzaifaiqbal/Selenium-Projects",
//       live: "#",
//       icon: FaCode ,
//       gradient: "bg-gradient-cyber"
//     }


//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const projectVariants = {
//     hidden: { 
//       y: 100,
//       opacity: 0,
//       rotateX: 90
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const titleVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <section id="projects" ref={ref} className="py-20 px-4 min-h-screen flex items-center">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           variants={titleVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-cyber mb-6">
//             My Projects
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work and creative solutions
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((project) => {
//             const Icon = project.icon;
//             return (
//               <motion.div
//                 key={project.id}
//                 variants={projectVariants}
//                 className="glass-card rounded-xl overflow-hidden group electric-hover"
//                 whileHover={{ 
//                   y: -10,
//                   rotateY: 5,
//                   transition: { duration: 0.4 }
//                 }}
//                 style={{ 
//                   transformStyle: 'preserve-3d',
//                   perspective: '1000px'
//                 }}
//               >
//                 <div className={`${project.gradient} p-6 relative overflow-hidden`}>
//                   <div className="absolute inset-0 opacity-20">
//                     <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse" />
//                     <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '1s' }} />
//                   </div>
//                   <div className="relative z-10">
//                     <Icon className="text-4xl text-white mb-4 animate-float" />
//                     <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
//                       {project.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <p className="text-muted-foreground mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 text-xs font-semibold bg-muted rounded-full text-muted-foreground border border-border"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex space-x-4">
//                     <motion.a
//                       href={project.github}
//                       className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <FaGithub className="text-lg" />
//                       <span className="text-sm font-semibold">Code</span>
//                     </motion.a>
                    
//                     <motion.a
//                       href={project.live}
//                       className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <FaExternalLinkAlt className="text-lg" />
//                       <span className="text-sm font-semibold">Live Demo</span>
//                     </motion.a>
//                   </div>
//                 </div>

//                 <motion.div
//                   className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
//                   style={{ backfaceVisibility: 'hidden' }}
//                 />
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <motion.div
//           variants={projectVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mt-16"
//         >
//           <motion.button
//             className="glass-card px-8 py-4 rounded-lg electric-hover text-foreground font-semibold text-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.open('https://github.com/Mhuzaifaiqbal', '_blank')}
//           >
//             View All Projects on GitHub
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };


import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPlane , FaFutbol,FaGamepad, FaSpider   } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
      {
      id: 1,
      title: "Airplane Management System",
      description: "A full-stack airline seat booking system built with React and FastAPI, featuring real-time seat management, booking, and cancellation",
      tech: ["React Frontend", "Python Backend", "FastAPI","C++","API Integration"],
      github: "https://github.com/Mhuzaifaiqbal/Flight-Booking-System",
      live: "#",
      icon: FaPlane ,
      gradient: "bg-gradient-lightning"
    },
    {
      id: 2,
      title: "2-D Snake Game",
      description: "A fast-paced 2D Snake Game built with C++ and SFML, featuring smooth controls, dynamic growth, and real-time collision handling.",
      tech: ["C++", "SFML", "File I/O"],
      github: "https://github.com/Mhuzaifaiqbal/2-D-Snake-Game",
      live: "#",
      icon: FaGamepad ,
      gradient: "bg-gradient-electric"
    },
    {
      id: 3,
      title: "Fifa Wc 2026 Predictor",
      description: "An intelligent match outcome predictor using machine learning models trained on player stats, team performance, and historical data to simulate the 2026 World Cup.",
      tech: ["Python", "Data science", "Scikit learn", "Simulation","Hybrid Simulation"],
      github: "#",
      live: "#",
      icon: FaFutbol,
      gradient: "bg-gradient-lightning"
    },
    {
      id: 4,
      title: "ML-Project Collection",
      description: "A curated set of real-world machine learning projects applying predictive modeling, AI integration, and data-driven insights across domains like business, healthcare, and finance..",
      tech: ["Python", "Scikit Learn", "Meta Prophet", "Keras", "Pandas","Data Science"],
      github: "https://github.com/Mhuzaifaiqbal/Mini-Projects",
      live: "#",
      icon: FaCode,
      gradient: "bg-gradient-cyber"
    },
    {
      id: 5,
      title: "Web Scraping Project Collection",
      description: "A Collection of projects that include detailed notes and web scraping code snippets with Selenium, Bs4, and requests.",
      tech: ["Python", "Selenium", "BS4", "Web Crawling", "Pandas","Imports"],
      github: "https://github.com/Mhuzaifaiqbal/Selenium-Projects",
      live: "#",
      icon: FaSpider ,
      gradient: "bg-gradient-cyber"
    },
    {
      id: 6,
      title: "E-Commerce Website",
      description: "A Full fledge E-Commerce website made with React + Type Script, including interactive features, captivating UI and styles with an animated purple theme.",
      tech: ["React", "Type Script", "Tailwind CSS"],
      github: "https://futurestoree.netlify.app/",
      live: "#",
      icon: FaCode ,
      gradient: "bg-gradient-cyber"
    }


  ];

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

  const projectVariants = {
    hidden: { 
      y: 100,
      opacity: 0,
      rotateX: 90
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
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
    <section id="projects" ref={ref} className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cyber mb-6">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="glass-card rounded-xl overflow-hidden group electric-hover"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className={`${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <div className="relative z-10">
                    <Icon className="text-4xl text-white mb-4 animate-float" />
                    <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-semibold bg-muted rounded-full text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm font-semibold">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backfaceVisibility: 'hidden' }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={projectVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            className="glass-card px-8 py-4 rounded-lg electric-hover text-foreground font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/Mhuzaifaiqbal', '_blank')}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;