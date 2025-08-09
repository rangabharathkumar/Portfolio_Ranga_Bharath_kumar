import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, Trophy } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Blockchain-based Secure Data Sharing Platform",
      subtitle: "PriveX 3.0",
      description: "Built a decentralized system enabling tamper-proof data sharing using blockchain technology. Led frontend development with React and smart contract integration using Solidity.",
      period: "Jan 2024 – May 2024",
      technologies: ["React.js", "Solidity", "MetaMask", "Blockchain", "Web3"],
      achievements: [
        "Led 5-member team to functional prototype",
        "Immutable transaction auditing",
        "Top 5 projects at VIT Bhopal Project Expo",
        "Decentralized architecture implementation"
      ],
      github: "https://github.com/rangabharathkumar/PriveX_3.0-A-Blockchain-based-secure-data-sharing-platform",
      type: "Blockchain",
      status: "Completed",
      color: "neon-blue",
      teamSize: 5
    },
    {
      title: "Health Oracle",
      subtitle: "AI-Powered Disease Prediction System",
      description: "Developed an AI-powered mobile app analyzing wearable data to predict diseases with personalized health insights. Led ML model development and integration for real-time health risk assessment.",
      period: "July 2024 – Mar 2025",
      technologies: ["React Native", "Machine Learning", "FastAPI", "TensorFlow", "Python", "AI"],
      achievements: [
        "Real-time health risk assessment",
        "Personalized health insights",
        "Managed 8-member team",
        "Full project lifecycle management"
      ],
      github: "https://github.com/rangabharathkumar/health_oracle_2",
      type: "Machine Learning",
      status: "Completed",
      color: "neon-green",
      teamSize: 8
    },
    {
      title: "Autonomous Disaster Response UAV",
      subtitle: "AeroTHON 2025 Hackathon Project",
      description: "Developed a real-time object detection system using YOLOv8 for disaster classification and payload targeting. Implemented multi-threaded perception system for obstacle avoidance.",
      period: "July 2024 – Mar 2025",
      technologies: ["Python", "YOLOv8", "MAVSDK", "OpenCV", "Raspberry Pi", "Computer Vision"],
      achievements: [
        "Real-time object detection system",
        "Multi-threaded perception system",
        "Autonomous decision-making logic",
        "Disaster classification & targeting"
      ],
      github: "https://github.com/rangabharathkumar/something",
      type: "Computer Vision",
      status: "Completed",
      color: "cyber-purple",
      teamSize: 4
    }
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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
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

  return (
    <section ref={ref} className="py-20 px-6 relative" id="featured-projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning blockchain, machine learning, and autonomous systems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                z: 50
              }}
              className="group perspective-1000"
            >
              <Card className="cyber-card h-full transform-gpu transition-all duration-500 hover:glow-border">
                <CardHeader className="space-y-4">
                  {/* Project Type & Status */}
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="outline" 
                      className={`border-${project.color} text-${project.color} hover:bg-${project.color}/20`}
                    >
                      {project.type}
                    </Badge>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-neon-green text-black' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{project.teamSize} members</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.3 + techIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-4 w-4 text-secondary" />
                      <h4 className="text-sm font-medium text-foreground">Key Achievements</h4>
                    </div>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 3).map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                          className="text-xs text-muted-foreground flex items-start space-x-2"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 btn-neon text-xs"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 btn-cyber text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Projects", value: "3+" },
              { label: "Technologies Used", value: "12+" },
              { label: "Completed Projects", value: "3+" },
              { label: "GitHub Repos", value: "Active" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-mono text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;