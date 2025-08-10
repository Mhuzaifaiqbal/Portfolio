
import { motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const nameVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateX: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/40 via-purple-900/20 to-black" />

      {/* ✨ Starfield at top 25% only */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.span
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 blur-sm"
            style={{
              top: `${Math.random() * 25}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 🌙 Moon Icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <FaMoon className="text-4xl text-primary drop-shadow-lg" />
        </motion.div>

        {/* "Hello, I'm" */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-lg md:text-xl text-muted-foreground tracking-wider">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={nameVariants}
          whileHover={{
            textShadow: '0 0 30px #00BFFF',
            color: '#00BFFF',
            scale: 1.08,
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-electric leading-tight transition-all duration-300"
          style={{ perspective: '1000px' }}
        >
          Muhammad Huzaifa Iqbal
        </motion.h1>

        {/* Role */}
        <motion.h2
          whileHover={{
            textShadow: '0 0 20px #00BFFF',
            color: '#00BFFF',
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-cyber mb-4 transition-all"
        >
          Aspiring AI/ML Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Integrating AI and ML models into real-world experiences with precision and creativity
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="glass-card px-8 py-4 rounded-lg electric-hover text-foreground font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-lg border border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;


// -----------------------------Experimenting more with tho code---------------------------------

// for this snippet, the code must be in tsx for the above twom, it should be jsx
// import { motion, easeOut } from 'framer-motion';
// import { FaMoon } from 'react-icons/fa';
// import { useEffect, useRef, useState } from 'react';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: easeOut,
//       },
//     },
//   };

//   const nameVariants = {
//     hidden: { scale: 0.8, opacity: 0, rotateX: 90 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         duration: 1.2,
//         ease: easeOut,
//         delay: 0.5,
//       },
//     },
//   };

//   const moonRef = useRef<HTMLDivElement>(null);
//   const [moonPosition, setMoonPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!moonRef.current) return;
//     const moon = moonRef.current.getBoundingClientRect();
//     const dx = e.clientX - (moon.left + moon.width / 2);
//     const dy = e.clientY - (moon.top + moon.height / 2);
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < 100) {
//       const angle = Math.atan2(dy, dx);
//       const moveX = -Math.cos(angle) * 60;
//       const moveY = -Math.sin(angle) * 60;
//       setMoonPosition({ x: moveX, y: moveY });
//     } else {
//       setMoonPosition({ x: 0, y: 0 });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const [isResumeOpen, setIsResumeOpen] = useState(false);

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
//     >
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/40 via-purple-900/20 to-black" />

//       <motion.div
//         className="text-center z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           ref={moonRef}
//           className="flex justify-center mb-4"
//           animate={{ x: moonPosition.x, y: moonPosition.y }}
//           transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//         >
//           <FaMoon className="text-3xl text-primary drop-shadow-md" />
//         </motion.div>

//         <motion.div variants={itemVariants} className="mb-4">
//           <span className="text-lg text-muted-foreground tracking-wider">Hello, I'm</span>
//         </motion.div>

//         <motion.h1
//           variants={nameVariants}
//           whileHover={{
//             textShadow: '0 0 30px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.05,
//           }}
//           className="text-4xl md:text-5xl font-bold mb-4 text-electric leading-tight"
//           style={{ perspective: '1000px' }}
//         >
//           Muhammad Huzaifa Iqbal
//         </motion.h1>

//         <motion.h2
//           whileHover={{
//             textShadow: '0 0 20px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.03,
//           }}
//           transition={{ duration: 0.3 }}
//           className="text-xl md:text-3xl font-semibold text-cyber mb-3"
//         >
//           Aspiring AI/ML Engineer
//         </motion.h2>

//         <motion.p
//           variants={itemVariants}
//           className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
//         >
//           Integrating AI and ML models into real-world experiences with precision and creativity.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <motion.button
//             className="glass-card px-6 py-3 rounded-lg electric-hover text-foreground font-medium text-base"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             View My Work
//           </motion.button>

//           <motion.button
//             className="px-6 py-3 rounded-lg border border-primary text-primary font-medium text-base hover:bg-primary hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             Get In Touch
//           </motion.button>

//           <motion.button
//             className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-medium text-base hover:bg-blue-500 hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsResumeOpen(true)}
//           >
//             View Resume
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {isResumeOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
//         >
//           <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl w-[90%] max-w-xl relative">
//             <button
//               onClick={() => setIsResumeOpen(false)}
//               className="absolute top-2 right-3 text-lg text-gray-500 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-bold mb-3 text-center text-primary">My Resume</h2>
//             <iframe
//               src="/CV-Muhammad Huzaifa Iqbal.docx"
//               className="w-full h-[400px] rounded-md border"
//               title="Resume"
//             />
//           </div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Hero;


// import { motion } from 'framer-motion';
// import { FaMoon } from 'react-icons/fa';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const nameVariants = {
//     hidden: {
//       scale: 0.8,
//       opacity: 0,
//       rotateX: 90,
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         duration: 1.2,
//         ease: 'easeOut',
//         delay: 0.5,
//       },
//     },
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
//     >
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/40 via-purple-900/20 to-black" />

//       {/* ✨ Starfield at top 25% only */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {[...Array(80)].map((_, i) => (
//           <motion.span
//             key={`star-${i}`}
//             className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 blur-sm"
//             style={{
//               top: `${Math.random() * 25}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: Math.random(),
//             }}
//             animate={{
//               y: [0, -10, 0],
//               opacity: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 3,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//           />
//         ))}
//       </div>

//       {/* Hero content */}
//       <motion.div
//         className="text-center z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* 🌙 Moon Icon */}
//         <motion.div
//           className="flex justify-center mb-4"
//           animate={{ rotate: [0, 10, -10, 0] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         >
//           <FaMoon className="text-4xl text-primary drop-shadow-lg" />
//         </motion.div>

//         {/* "Hello, I'm" */}
//         <motion.div variants={itemVariants} className="mb-6">
//           <span className="text-lg md:text-xl text-muted-foreground tracking-wider">
//             Hello, I'm
//           </span>
//         </motion.div>

//         {/* Name */}
//         <motion.h1
//           variants={nameVariants}
//           whileHover={{
//             textShadow: '0 0 30px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.08,
//           }}
//           className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-electric leading-tight transition-all duration-300"
//           style={{ perspective: '1000px' }}
//         >
//           Muhammad Huzaifa Iqbal
//         </motion.h1>

//         {/* Role */}
//         <motion.h2
//           whileHover={{
//             textShadow: '0 0 20px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.05,
//           }}
//           transition={{ duration: 0.3 }}
//           className="text-2xl md:text-4xl lg:text-5xl font-semibold text-cyber mb-4 transition-all"
//         >
//           Aspiring AI/ML Engineer
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
//         >
//           Integrating AI and ML models into real-world experiences with precision and creativity
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <motion.button
//             className="glass-card px-8 py-4 rounded-lg electric-hover text-foreground font-semibold text-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             View My Work
//           </motion.button>

//           <motion.button
//             className="px-8 py-4 rounded-lg border border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             Get In Touch
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


// -----------------------------Experimenting more with tho code---------------------------------

// for this snippet, the code must be in tsx for the above twom, it should be jsx
// import { motion, easeOut } from 'framer-motion';
// import { FaMoon } from 'react-icons/fa';
// import { useEffect, useRef, useState } from 'react';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: easeOut,
//       },
//     },
//   };

//   const nameVariants = {
//     hidden: { scale: 0.8, opacity: 0, rotateX: 90 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         duration: 1.2,
//         ease: easeOut,
//         delay: 0.5,
//       },
//     },
//   };

//   const moonRef = useRef<HTMLDivElement>(null);
//   const [moonPosition, setMoonPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!moonRef.current) return;
//     const moon = moonRef.current.getBoundingClientRect();
//     const dx = e.clientX - (moon.left + moon.width / 2);
//     const dy = e.clientY - (moon.top + moon.height / 2);
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     if (distance < 100) {
//       const angle = Math.atan2(dy, dx);
//       const moveX = -Math.cos(angle) * 60;
//       const moveY = -Math.sin(angle) * 60;
//       setMoonPosition({ x: moveX, y: moveY });
//     } else {
//       setMoonPosition({ x: 0, y: 0 });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const [isResumeOpen, setIsResumeOpen] = useState(false);

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
//     >
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/40 via-purple-900/20 to-black" />

//       <motion.div
//         className="text-center z-10 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           ref={moonRef}
//           className="flex justify-center mb-4"
//           animate={{ x: moonPosition.x, y: moonPosition.y }}
//           transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//         >
//           <FaMoon className="text-3xl text-primary drop-shadow-md" />
//         </motion.div>

//         <motion.div variants={itemVariants} className="mb-4">
//           <span className="text-lg text-muted-foreground tracking-wider">Hello, I'm</span>
//         </motion.div>

//         <motion.h1
//           variants={nameVariants}
//           whileHover={{
//             textShadow: '0 0 30px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.05,
//           }}
//           className="text-4xl md:text-5xl font-bold mb-4 text-electric leading-tight"
//           style={{ perspective: '1000px' }}
//         >
//           Muhammad Huzaifa Iqbal
//         </motion.h1>

//         <motion.h2
//           whileHover={{
//             textShadow: '0 0 20px #00BFFF',
//             color: '#00BFFF',
//             scale: 1.03,
//           }}
//           transition={{ duration: 0.3 }}
//           className="text-xl md:text-3xl font-semibold text-cyber mb-3"
//         >
//           Aspiring AI/ML Engineer
//         </motion.h2>

//         <motion.p
//           variants={itemVariants}
//           className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
//         >
//           Integrating AI and ML models into real-world experiences with precision and creativity.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <motion.button
//             className="glass-card px-6 py-3 rounded-lg electric-hover text-foreground font-medium text-base"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             View My Work
//           </motion.button>

//           <motion.button
//             className="px-6 py-3 rounded-lg border border-primary text-primary font-medium text-base hover:bg-primary hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() =>
//               document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             Get In Touch
//           </motion.button>

//           <motion.button
//             className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-medium text-base hover:bg-blue-500 hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsResumeOpen(true)}
//           >
//             View Resume
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {isResumeOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
//         >
//           <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl w-[90%] max-w-xl relative">
//             <button
//               onClick={() => setIsResumeOpen(false)}
//               className="absolute top-2 right-3 text-lg text-gray-500 hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-bold mb-3 text-center text-primary">My Resume</h2>
//             <iframe
//               src="/CV-Muhammad Huzaifa Iqbal.docx"
//               className="w-full h-[400px] rounded-md border"
//               title="Resume"
//             />
//           </div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Hero;