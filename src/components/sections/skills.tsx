import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  Coffee,
  Zap,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "Python"],
      description: "Core programming languages for backend and ML development"
    },
    {
      title: "Machine Learning Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch"],
      description: "Building AI models for healthcare predictions and autonomous systems"
    },
    {
      title: "Libraries & Tools",
      icon: Cpu,
      skills: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "Git", "FastAPI"],
      description: "Essential tools for data science and software development"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS (Basic)", "Render"],
      description: "Cloud deployment and hosting solutions"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="cyber-card h-full">
                <CardContent className="p-6 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + skillIndex * 0.1 
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="relative">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${85 + Math.random() * 15}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Languages", value: "2+" },
              { label: "ML Frameworks", value: "2+" },
              { label: "Projects", value: "3+" },
              { label: "Experience", value: "Student" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-mono text-xs md:text-sm">
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

export default Skills;