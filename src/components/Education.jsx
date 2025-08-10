
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BadgeCheck } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Olevel",
      school: "Ibne Sina College",
      location: "Lahore, Pakistan",
      year: "2012 - 2022",
      grades: "7A*s and 1A",
      highlights: [
        "High achiever",
        "Football Team Captain",
        "House Captain",
        "Part of the cricket club"
      ]
    },
    {
      id: 2,
      degree: "Alevel",
      school: "International School Lahore",
      location: "Lahore, Pakistan",
      year: "2022 - 2024",
      grades: "1A* and 2As",
      highlights: [
        "Physics, Maths, Computer science",
      ]
    },
    {
      id: 3,
      degree: "Bachelors in Computer Science",
      school: "Lahore University of Management and Sciences",
      location: "Lahore, Pakistan",
      year: "2024 - 2028",
      grades: "In Progress",
      highlights: [
        "Intended Economics Minor",
        "Part of Spades Society"
      ]
    }
  ];

  const certificates = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera (Stanford/DeepLearning.AI)",
      date: "June 2025",
      description: "Comprehensive ML specialization including supervised, unsupervised learning, and practical projects."
    },
    {
      title: "React Frontend Development",
      provider: "OneRoadMap",
      date: "March 2025",
      description: "For Passing OneRoadMap skill certification in Frontend Development"
    },
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM",
      date: "April 2025",
      description: "Gained foundational skills in Python programming for data analysis, visualization, and basic AI applications."
    },
    {
      title: "Python Project for Data Science, AI & Development",
      provider: "IBM",
      date: "July 2025",
      description: "Applied Python skills to analyze data, visualize insights, and build a mini AI-driven solution in a real-world project."
    },
     {
      title: "Scikit Learn to solve ML regression problems",
      provider: "Coursera Project Network",
      date: "June 2025",
      description: "Used Scikit-learn to build, train, and evaluate regression models for solving real-world machine learning problems."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 space-y-24">
      <div id="education" className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey throughout the years
          </p>
        </motion.div>
        <br />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
             

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <h4 className="text-lg font-medium text-foreground">
                        {edu.school}
                      </h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>

                    {edu.grades && (
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          Grades: {edu.grades}
                        </span>
                      </div>
                    )}

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Certificate Section (trying to directly write together instead of creatng a whole new one--- */}
      <div id="certificates" className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <br />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certifications that validate my skills and expertise.
          </p>
          <br />
        </motion.div>
<div className="space-y-6">
          {certificates.map((cert, idx) => (
            <
        motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.provider} — {cert.date}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
