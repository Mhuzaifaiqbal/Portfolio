import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaCode,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiFastapi } from "react-icons/si";

const skills = [
  { icon: FaReact, name: "React", color: "text-blue-400" },
  { icon: FaCode, name: "C++", color: "text-blue-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaPython, name: "Python", color: "text-blue-600" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: SiMongodb, name: "MySQL", color: "text-green-600" },
  { icon: FaGitAlt, name: "Git", color: "text-orange-600" },
  { icon: SiFastapi, name: "API", color: "text-orange-400" },
];

export default function ScrollRow({ direction = 1 }: { direction?: number }) {
  return (
    <div
      className="relative w-screen overflow-hidden py-4"
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <motion.div
        className="flex gap-12 items-center"
        style={{ flexWrap: "nowrap", minWidth: "100%" }}
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...skills, ...skills].map((skill, idx) => {
          const Icon = skill.icon;
          return (
           <motion.div
  key={idx}
  whileHover={{ scale: 1.1, rotateY: 180 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center"
  style={{
    flex: "0 0 auto",
    transformStyle: "preserve-3d",
    perspective: "1000px",
  }}
>
  <Icon className={`text-5xl ${skill.color}`} />
  <span className="mt-2 text-sm font-medium">{skill.name}</span>
</motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
