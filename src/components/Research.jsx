import { motion } from 'framer-motion';
import { FaBook, FaFlask, FaRocket, FaExternalLinkAlt ,FaHandshake} from 'react-icons/fa';

const Research = () => {
  const researchProjects = [
    {
      title: "Simulation vs Machine Learning",
      description: "Contrasting rule-based simulations with data-driven machine learning to evaluate predictive accuracy and adaptability in dynamic systems.",
      status: "In Progress",
      year: "June 2025- NA",
      tags: ["Python","ML", "Simulation","Research","Data Analysis"],
      link: "#"
    },
    {
      title: "Islamic Banking System",
      description: "Leveraging machine learning to forecast future growth trends in the Islamic banking system through data-driven insights",
      status: "Published",
      year: "June-2025",
      tags: ["Research", "Economics","Data Science","Audit Analysis","ML","Python"],
      link: "https://islamicbankingbyhuzaifa.netlify.app/"
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      skewX: -15
    },
    visible: { 
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 lightning-bg opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-electric">
            Personal Researches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of technology through research, experimentation, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 electric-hover group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FaFlask className="text-primary text-xl" />
                  <span className="text-sm font-medium text-primary">{project.year}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-cyber group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <FaBook className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Research Paper</span>
                </div>
                <motion.a
                  href={project.link}
                  className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">View</span>
                  <FaExternalLinkAlt className="text-xs" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        ><br />
        <br />
        <br />
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <FaHandshake className="text-4xl text-primary mx-auto mb-4" />
            
            
            <h3 className="text-2xl font-bold mb-4 text-cyber">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing research opportunities, academic partnerships, 
              and innovative projects that push the boundaries of technology.
            </p>
            <br />
            <motion.button
            
              className="px-6 py-3 bg-primary/10 text-primary border border-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;