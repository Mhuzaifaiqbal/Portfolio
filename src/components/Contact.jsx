import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mhuzaifaiqbal56@gmail.com",
      label: "Email",
      color: "text-primary"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-huzaifa-iqbal/",
      label: "LinkedIn",
      color: "text-blue-500"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Mhuzaifaiqbal",
      label: "GitHub",
      color: "text-foreground"
    },
     {
      icon: SiInstagram,
      href: "https://www.instagram.com/life_withcoding?igsh=MTg0ODhsOXgwc2p2Mg==",
      label: "Instagram",
      color: "text-primary"
    },

  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Info */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-8 text-electric"
            >
              Let's Connect
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              creative ideas, or opportunities to be part of your vision. Let's create something amazing together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-6 mb-8"
            >
              <div className="glass-card p-6 rounded-lg electric-hover">
                <h3 className="text-xl font-semibold text-cyber mb-2">Quick Response</h3>
                <p className="text-muted-foreground">I typically respond within 24 hours</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg electric-hover">
                <h3 className="text-xl font-semibold text-cyber mb-2">Open to Opportunities</h3>
                <p className="text-muted-foreground">Freelance projects and full-time positions</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-2xl hover:scale-125 transition-all duration-300`}
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-cyber mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-electric text-white font-semibold py-4 px-6 rounded-lg electric-hover flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;