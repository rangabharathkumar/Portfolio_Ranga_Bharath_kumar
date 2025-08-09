import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Download
} from 'lucide-react';

const ContactSimple = () => {
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
      href: "https://github.com/rangabharathkumar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ranga-bharath-kumar"
    },
    {
      icon: Download,
      label: "Resume",
      href: "#"
    }
  ];

  return (
    <section className="py-16 relative z-10" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in cybersecurity, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="cyber-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold gradient-text-primary mb-4">Contact Information</h3>
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors">
                        <info.icon className="h-4 w-4 text-primary" />
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
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="cyber-card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold gradient-text-primary mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <link.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card">
              <span className="w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-sm text-muted-foreground">Available for new opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSimple;