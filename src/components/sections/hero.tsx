import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import TypingText from '@/components/ui/typing-text';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

// 3D Floating Shapes Component
const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7bff00" />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial 
            color="#00f0ff" 
            wireframe 
            transparent 
            opacity={0.6}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[2, -1, 0]}>
          <dodecahedronGeometry args={[0.3]} />
          <meshStandardMaterial 
            color="#7bff00" 
            wireframe 
            transparent 
            opacity={0.7}
          />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[0, 2, -1]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshStandardMaterial 
            color="#b300ff" 
            wireframe 
            transparent 
            opacity={0.5}
          />
        </mesh>
      </Float>
    </>
  );
};

const Hero = () => {
  const roles = [
    "Cybersecurity Student",
    "Java Developer"
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rangabharathkumar",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ranga-bharath-kumar",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rangabharathkumar1@gmail.com",
      label: "Email"
    }
  ];

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#featured-projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-background/80 z-10" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <FloatingShapes />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Navigation Bar */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="glass-card px-6 py-3 rounded-full">
              <div className="flex space-x-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="gradient-text">Ranga Bharath</span>
            </motion.h1>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Kumar
            </motion.h2>
          </div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-2xl md:text-3xl"
          >
            <span className="text-muted-foreground">I'm a </span>
            <TypingText 
              words={roles}
              className="gradient-text-primary font-semibold"
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
            />
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.img
                src="/lovable-uploads/3147fd95-9e4b-4a54-b170-2dd8da0eb8a2.png"
                alt="Ranga Bharath Kumar - Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover glass-card p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Hey there, fellow tech enthusiast! I'm a CSE student specializing in cybersecurity, and I'm totally immersed in the world of machine learning with Python and Java. My mission? To craft systems that are not only secure but also intelligent. I'm pumped to collaborate on projects that break new ground. Let's combine our talents and create something truly extraordinary!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              className="btn-cyber group"
              onClick={() => window.open("https://github.com/rangabharathkumar/Resume/blob/main/Ranga_Bharath_kumar_Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              className="btn-neon"
              onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass-card hover:glow-border transition-all duration-300 group"
              >
                <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;