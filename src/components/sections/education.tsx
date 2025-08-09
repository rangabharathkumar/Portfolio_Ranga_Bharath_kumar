import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const educationData = [
    {
      degree: "Integrated MTech Computer Science and Engineering",
      specialization: "Cybersecurity Specialization",
      institution: "VIT Bhopal University",
      location: "Bhopal",
      period: "Oct 2022 – Ongoing",
      status: "current",
      achievements: [
        "Specialized in Cybersecurity applications",
        "Working on ML and Blockchain projects",
        "Active member of Mozilla Firefox Club",
        "Top 5 projects at VIT Bhopal Project Expo"
      ],
      grade: "Pursuing",
      color: "primary"
    },
    {
      degree: "Class XII",
      specialization: "Science Stream",
      institution: "Sri Chaitanya Kalasala",
      location: "Hyderabad",
      period: "Jun 2020 – March 2022",
      status: "completed",
      achievements: [
        "Strong foundation in Mathematics and Science",
        "State level sports participation",
        "Leadership in school activities"
      ],
      grade: "Completed",
      color: "secondary"
    },
    {
      degree: "Class X",
      specialization: "CBSE Board",
      institution: "Sri Chaitanya School",
      location: "Hyderabad",
      period: "Jun 2018 – Mar 2020",
      status: "completed",
      achievements: [
        "Academic excellence in core subjects",
        "Represented school in state tournaments",
        "Active in extracurricular activities"
      ],
      grade: "Completed",
      color: "accent"
    }
  ];

  const certifications = [
    {
      name: "The Bits and Bytes Computer Networking",
      provider: "Coursera",
      year: "2024",
      type: "Professional Certificate"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Education Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey through cybersecurity and technology
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Pipe - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
                  <Card className="cyber-card group hover:glow-border transition-all duration-500">
                    <CardContent className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-primary font-mono">
                            {edu.specialization}
                          </p>
                        </div>
                        <Badge 
                          variant={edu.status === 'current' ? 'default' : 'outline'}
                          className={`${edu.status === 'current' ? 'bg-secondary text-black' : ''}`}
                        >
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </Badge>
                      </div>

                      {/* Institution Info */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-secondary" />
                          <span className="text-sm font-medium">Key Highlights</span>
                        </div>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                              className="text-xs text-muted-foreground flex items-center space-x-2"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    className="relative"
                  >
                    <div className={`w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.8)] z-10 relative`} />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 w-6 h-6 rounded-full bg-primary opacity-30`}
                    />
                  </motion.div>
                </div>

                {/* Spacer - Hidden on mobile */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary text-center mb-8">
            Certifications
          </h3>
          <div className="flex justify-center">
            <Card className="cyber-card max-w-md">
              <CardContent className="p-6">
                {certifications.map((cert, index) => (
                  <div key={cert.name} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.provider}</span>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{cert.type}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;