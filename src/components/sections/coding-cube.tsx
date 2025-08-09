import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  GitBranch, 
  Star, 
  Award, 
  Calendar,
  ExternalLink,
  X,
  Code,
  Target,
  Zap
} from 'lucide-react';
import * as THREE from 'three';

// 3D Rotating Cube Component with Multiple Faces
const RotatingCube = ({ isClicked, onFaceClick }: { isClicked: boolean, onFaceClick: (face: string) => void }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current && !isClicked) {
      groupRef.current.rotation.x += delta * 0.2;
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  const faceColors = {
    coding: '#00f0ff',      // Cyan for coding
    certification: '#7bff00', // Green for certifications  
    status: '#b300ff'       // Purple for present status
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Front Face - Coding */}
        <mesh 
          position={[0, 0, 0.76]}
          onClick={() => onFaceClick('coding')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.coding}
            transparent 
            opacity={0.9}
            emissive={faceColors.coding}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Back Face - Coding (opposite) */}
        <mesh 
          position={[0, 0, -0.76]}
          rotation={[0, Math.PI, 0]}
          onClick={() => onFaceClick('coding')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.coding}
            transparent 
            opacity={0.9}
            emissive={faceColors.coding}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Right Face - Certifications */}
        <mesh 
          position={[0.76, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={() => onFaceClick('certification')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.certification}
            transparent 
            opacity={0.9}
            emissive={faceColors.certification}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Left Face - Certifications (opposite) */}
        <mesh 
          position={[-0.76, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          onClick={() => onFaceClick('certification')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.certification}
            transparent 
            opacity={0.9}
            emissive={faceColors.certification}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Top Face - Present Status */}
        <mesh 
          position={[0, 0.76, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={() => onFaceClick('status')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.status}
            transparent 
            opacity={0.9}
            emissive={faceColors.status}
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Bottom Face - Present Status (opposite) */}
        <mesh 
          position={[0, -0.76, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          onClick={() => onFaceClick('status')}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial 
            color={faceColors.status}
            transparent 
            opacity={0.9}
            emissive={faceColors.status}
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Wireframe Cube */}
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.2}
            wireframe
          />
        </mesh>

        {/* Text labels for faces */}
        <Text
          position={[0, 0, 0.77]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/roboto-regular.woff"
        >
          Coding
        </Text>
        
        <Text
          position={[0, 0, -0.77]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI, 0]}
          font="/fonts/roboto-regular.woff"
        >
          Coding
        </Text>
        
        <Text
          position={[0.77, 0, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI / 2, 0]}
          font="/fonts/roboto-regular.woff"
        >
          Certifications
        </Text>
        
        <Text
          position={[-0.77, 0, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          rotation={[0, -Math.PI / 2, 0]}
          font="/fonts/roboto-regular.woff"
        >
          Certifications
        </Text>
        
        <Text
          position={[0, 0.77, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          rotation={[-Math.PI / 2, 0, 0]}
          font="/fonts/roboto-regular.woff"
        >
          Present Status
        </Text>
        
        <Text
          position={[0, -0.77, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          rotation={[Math.PI / 2, 0, 0]}
          font="/fonts/roboto-regular.woff"
        >
          Present Status
        </Text>
      </group>
    </Float>
  );
};

const CubeScene = ({ isClicked, onFaceClick }: { isClicked: boolean, onFaceClick: (face: string) => void }) => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7bff00" />
      <pointLight position={[0, 10, -10]} intensity={0.8} color="#b300ff" />
      <pointLight position={[0, -10, 10]} intensity={0.6} color="#ff6b00" />
      
      <RotatingCube isClicked={isClicked} onFaceClick={onFaceClick} />
    </>
  );
};

const CodingCube = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [cubeClicked, setCubeClicked] = useState(false);

  const handleFaceClick = (face: string) => {
    setCubeClicked(true);
    setActivePanel(face);
    
    // Navigate to external links for coding
    if (face === 'coding') {
      window.open('https://leetcode.com/u/rangabharathkumar/', '_blank');
      setTimeout(() => {
        window.open('https://www.hackerrank.com/profile/rangabharathkum1', '_blank');
      }, 500);
    }
  };

  const closeDashboard = () => {
    setActivePanel(null);
    setCubeClicked(false);
  };

  const codingStats = {
    leetcode: {
      problemsSolved: "50+",
      contestRating: "1400+",
      currentStreak: "15 days",
      badges: ["Problem Solver", "Contest Participant"]
    },
    hackerrank: {
      skills: ["Python", "Java", "Problem Solving"],
      badges: ["Gold Badge - Python", "Silver Badge - Java"]
    },
    github: {
      repositories: "15+",
      stars: "25+",
      languages: ["Python", "Java", "JavaScript", "Solidity"]
    }
  };

  const currentStatus = {
    learning: "Advanced Machine Learning Algorithms",
    focus: "Deep Learning & Neural Networks", 
    lastUpdated: "January 2025",
    progress: "85%",
    nextGoal: "Computer Vision Specialization"
  };

  const certifications = [
    {
      title: "The Bits and Bytes Computer Networking",
      provider: "Coursera",
      date: "2024",
      verified: true
    }
  ];

  const pinnedRepos = [
    {
      name: "blockchain-secure-data-sharing",
      description: "Decentralized system for tamper-proof data sharing",
      stars: 8,
      forks: 3,
      language: "Solidity"
    },
    {
      name: "health-oracle",
      description: "AI-powered health prediction mobile app",
      stars: 12,
      forks: 5,
      language: "Python"
    },
    {
      name: "autonomous-disaster-uav",
      description: "Real-time object detection for disaster response",
      stars: 6,
      forks: 2,
      language: "Python"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Interactive Cube
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on the colored cube faces to explore different sections
          </p>
        </motion.div>

        {/* 3D Cube */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-80 h-80 md:w-96 md:h-96"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <CubeScene isClicked={cubeClicked} onFaceClick={handleFaceClick} />
            </Canvas>
          </motion.div>
        </div>

        {/* Interactive Dashboard */}
        <AnimatePresence>
          {activePanel && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            >
              <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                <Card className="cyber-card">
                  <CardContent className="p-6 md:p-8">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                        {activePanel === 'coding' ? 'Coding Dashboard' : 
                         activePanel === 'certification' ? 'Certifications' : 
                         'Current Learning Status'}
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={closeDashboard}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Content based on active panel */}
                    {activePanel === 'coding' && (
                      <>
        {/* GitHub Only */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 space-y-6 max-w-2xl w-full"
          >
            <div className="flex items-center space-x-3 mb-6">
              <GitBranch className="h-8 w-8 text-accent" />
              <h4 className="text-2xl font-bold">GitHub Activity</h4>
            </div>
            
            {/* GitHub Contribution Calendar */}
            <div className="w-full overflow-hidden rounded-lg">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={`https://ghchart.rshah.org/1a237e/rangabharathkumar`}
                alt="GitHub Contribution Calendar"
                className="w-full h-auto rounded-lg bg-white/5 p-4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="https://github-readme-stats-sigma-five.vercel.app/api?username=rangabharathkumar&show_icons=true&theme=dark&hide_border=true&count_private=true"
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
              />
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="https://github-readme-streak-stats.herokuapp.com/?user=rangabharathkumar&theme=dark&hide_border=true&background=00000000"
                alt="GitHub Streak Stats"
                className="w-full h-auto rounded-lg bg-black"
              />
            </div>
          </motion.div>
        </div>
                      </>
                    )}

                    {activePanel === 'certification' && (
                      <div className="mb-12">
                        <h4 className="text-xl md:text-2xl font-bold mb-6 gradient-text-primary">
                          Certifications
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {certifications.map((cert, index) => (
                            <motion.div
                              key={cert.title}
                              initial={{ opacity: 0, rotateY: 90 }}
                              animate={{ opacity: 1, rotateY: 0 }}
                              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                              whileHover={{ scale: 1.02, rotateY: 5 }}
                              className="cyber-card p-6 space-y-4 transform-style-preserve-3d"
                            >
                              <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                  <h5 className="font-semibold">{cert.title}</h5>
                                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{cert.date}</span>
                                  </div>
                                </div>
                                {cert.verified && (
                                  <div className="flex items-center space-x-1">
                                    <Award className="h-5 w-5 text-primary" />
                                    <span className="text-xs text-primary">Verified</span>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activePanel === 'status' && (
                      <div className="mb-12">
                        <h4 className="text-xl md:text-2xl font-bold mb-6 gradient-text-primary">
                          Current Learning Journey
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-6 space-y-4"
                          >
                            <div className="flex items-center space-x-3">
                              <Zap className="h-8 w-8 text-primary" />
                              <h5 className="text-lg font-bold">Currently Learning</h5>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <span className="text-muted-foreground text-sm">Main Focus</span>
                                <p className="font-semibold text-primary">{currentStatus.learning}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground text-sm">Specialization</span>
                                <p className="font-semibold">{currentStatus.focus}</p>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground text-sm">Progress</span>
                                <span className="font-bold text-secondary">{currentStatus.progress}</span>
                              </div>
                            </div>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card p-6 space-y-4"
                          >
                            <div className="flex items-center space-x-3">
                              <Target className="h-8 w-8 text-secondary" />
                              <h5 className="text-lg font-bold">Next Goals</h5>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <span className="text-muted-foreground text-sm">Upcoming</span>
                                <p className="font-semibold text-accent">{currentStatus.nextGoal}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground text-sm">Last Updated</span>
                                <p className="font-semibold">{currentStatus.lastUpdated}</p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {activePanel === 'coding' && (
                      <>
                        {/* Pinned Repositories */}
                        <div className="mb-12">
                          <h4 className="text-xl md:text-2xl font-bold mb-6 gradient-text-primary">
                            Featured Repositories
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {pinnedRepos.map((repo, index) => (
                              <motion.div
                                key={repo.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="cyber-card p-4 space-y-3"
                              >
                                <div className="flex items-start justify-between">
                                  <h5 className="font-semibold text-sm">{repo.name}</h5>
                                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <p className="text-xs text-muted-foreground">{repo.description}</p>
                                <div className="flex items-center justify-between text-xs">
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-3 w-3" />
                                      <span>{repo.stars}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <GitBranch className="h-3 w-3" />
                                      <span>{repo.forks}</span>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {repo.language}
                                  </Badge>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        {!activePanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              Click the colored faces: <span className="text-cyan-400">Coding</span>, <span className="text-green-400">Certifications</span>, or <span className="text-purple-400">Present Status</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => handleFaceClick('coding')}
                className="btn-neon group border-cyan-400 text-cyan-400"
              >
                <Code className="mr-2 h-4 w-4" />
                Coding Stats
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleFaceClick('certification')}
                className="btn-neon group border-green-400 text-green-400"
              >
                <Award className="mr-2 h-4 w-4" />
                Certifications
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleFaceClick('status')}
                className="btn-neon group border-purple-400 text-purple-400"
              >
                <Zap className="mr-2 h-4 w-4" />
                Learning Status
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CodingCube;