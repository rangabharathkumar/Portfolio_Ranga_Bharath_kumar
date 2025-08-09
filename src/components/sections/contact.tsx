import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  Download,
  MessageSquare
} from 'lucide-react';

// 3D Floating Elements
const FloatingElements = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7bff00" />
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 2, 0]}>
          <Sphere args={[0.3, 16, 16]}>
            <meshStandardMaterial color="#00f0ff" wireframe transparent opacity={0.4} />
          </Sphere>
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, -1, 1]}>
          <Sphere args={[0.2, 16, 16]}>
            <meshStandardMaterial color="#7bff00" wireframe transparent opacity={0.5} />
          </Sphere>
        </mesh>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1.5}>
        <mesh position={[0, 3, -2]}>
          <Sphere args={[0.25, 16, 16]}>
            <meshStandardMaterial color="#b300ff" wireframe transparent opacity={0.3} />
          </Sphere>
        </mesh>
      </Float>
    </>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rangabharathkumar1@gmail.com",
      href: "mailto:rangabharathkumar1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6304300048",
      href: "tel:+916304300048"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rangabharathkumar",
      color: "neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ranga-bharath-kumar",
      color: "neon-green"
    },
    {
      icon: Download,
      label: "Resume",
      href: "#",
      color: "cyber-purple"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden" id="contact">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <FloatingElements />
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on innovative projects or discuss opportunities in cybersecurity and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="gradient-text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="gradient-text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-4 p-4 rounded-lg border border-${link.color}/30 hover:border-${link.color}/60 hover:bg-${link.color}/10 transition-all duration-300 group`}
                    >
                      <link.icon className={`h-6 w-6 text-${link.color}`} />
                      <div>
                        <p className="font-medium text-foreground group-hover:gradient-text transition-all">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.label === 'GitHub' && 'View my repositories'}
                          {link.label === 'LinkedIn' && 'Professional network'}
                          {link.label === 'Resume' && 'Download CV'}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="gradient-text-primary flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6" />
                  <span>Send Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glow-border"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glow-border"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glow-border"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glow-border resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-cyber group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-mono text-sm">
            Available for freelance projects and full-time opportunities
          </p>
          <div className="mt-4 flex justify-center">
            <div className="px-4 py-2 glass-card">
              <span className="text-neon-green text-sm">●</span>
              <span className="ml-2 text-sm text-muted-foreground">Currently Open to Work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;