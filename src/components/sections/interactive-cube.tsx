import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Award, 
  BookOpen, 
  ExternalLink,
  PieChart,
  Code,
  Activity
} from 'lucide-react';

// ======================= ORBITING PLANETS (smaller) =======================
const OrbitingPlanets = ({ onPlanetClick }: { onPlanetClick: (name: string) => void }) => {
  const [baseAngle, setBaseAngle] = useState(0);

  useEffect(() => {
    let rafId: number;
    const speedRadiansPerSec = Math.PI / 8;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setBaseAngle((prev) => (prev + speedRadiansPerSec * dt) % (Math.PI * 2));
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const planets = [
    { name: 'Coding Highlights', from: '#5ee7df', to: '#b490ca', ring: 'rgba(94,231,223,0.5)', glow: 'rgba(94,231,223,0.6)' },
    { name: 'Present Status', from: '#a8ff78', to: '#78ffd6', ring: 'rgba(120,255,214,0.5)', glow: 'rgba(120,255,214,0.6)' },
    { name: 'Certifications', from: '#f6d365', to: '#fda085', ring: 'rgba(253,160,133,0.5)', glow: 'rgba(253,160,133,0.6)' },
  ];

  // Smaller orbits
  const ellipseRadii = [
    { rx: 140, ry: 90 },
    { rx: 190, ry: 120 },
    { rx: 240, ry: 150 },
  ];

  const BASE_SIZE = 50; // Reduced planet size

  return (
    <div className="flex justify-center items-center h-[400px]">
      <div className="relative w-[500px] h-[300px]">
        {ellipseRadii.map(({ rx, ry }, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 pointer-events-none"
            style={{ width: rx * 2, height: ry * 2 }}
          />
        ))}

        {planets.map((planet, index) => {
          const angle = baseAngle + (index * (2 * Math.PI)) / planets.length;
          const { rx, ry } = ellipseRadii[index];
          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;

          return (
            <motion.button
              key={planet.name}
              type="button"
              onClick={() => onPlanetClick(planet.name)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none z-50 cursor-pointer"
              style={{ x, y }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 140, damping: 16 }}
            >
              {/* planet body - no tags */}
              <div className="relative flex items-center justify-center" style={{ width: BASE_SIZE, height: BASE_SIZE }}>
                <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
                  <div
                    className="w-full h-full rounded-full shadow-2xl"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${planet.from}, ${planet.to})`,
                      boxShadow: `0 0 8px ${planet.glow}`,
                    }}
                  />
                  <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: BASE_SIZE * 1.4, height: BASE_SIZE * 0.7 }}>
                    <div className="w-full h-full rounded-full" style={{ borderTop: `2px solid ${planet.ring}`, transform: 'rotateX(65deg) rotateZ(15deg)' }} />
                  </div>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

// ======================= DASHBOARDS (ORIGINAL VERSION - UNCHANGED) =======================
const GitHubDashboard = () => (
  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* GitHub Stats */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            GitHub Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full overflow-hidden rounded-lg">
            <img src="https://ghchart.rshah.org/1a237e/rangabharathkumar" alt="GitHub Contribution Calendar" className="w-full h-auto rounded-lg bg-white/5 p-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=rangabharathkumar&show_icons=true&theme=dark&hide_border=true&count_private=true" alt="GitHub Stats" className="w-full h-auto rounded-lg" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=rangabharathkumar&theme=dark&hide_border=true&background=00000000" alt="GitHub Streak Stats" className="w-full h-auto rounded-lg" />
          </div>
        </CardContent>
      </Card>

      {/* Language Distribution */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="w-5 h-5" />
            Language Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { lang: 'JavaScript', percent: 35, color: '#f7df1e' },
              { lang: 'Python', percent: 25, color: '#3776ab' },
              { lang: 'Java', percent: 20, color: '#ed8b00' },
              { lang: 'TypeScript', percent: 15, color: '#3178c6' },
              { lang: 'Others', percent: 5, color: '#6b7280' }
            ].map((item) => (
              <div key={item.lang} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item.lang}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${item.percent}%` }} transition={{ duration: 1, delay: 0.5 }} className="h-full rounded-full" style={{ backgroundColor: item.color }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{item.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Pinned Repositories */}
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Github className="w-5 h-5" />
          Pinned Repositories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Hospital-Management-System', desc: 'Complete hospital management system with patient records', url: 'https://github.com/rangabharathkumar/Hospital-Management-System' },
            { name: 'Resume', desc: 'Professional resume repository with LaTeX source', url: 'https://github.com/rangabharathkumar/Resume' },
            { name: 'Portfolio-Website', desc: 'Interactive portfolio website built with React', url: 'https://github.com/rangabharathkumar/portfolio' }
          ].map((repo) => (
            <motion.div key={repo.name} whileHover={{ scale: 1.02 }} className="p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors cursor-pointer" onClick={() => window.open(repo.url, '_blank')}>
              <h4 className="font-semibold text-foreground mb-2">{repo.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{repo.desc}</p>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <Github className="w-3 h-3" />
                  Repo
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Open
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const CertificationsDashboard = () => (
  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="cyber-card">
        <CardContent className="p-6">
          <div className="flex flex-col h-full justify-between">
            <div>
              <Award className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-2">The Bits and Bytes Computer Networking</h4>
              <p className="text-sm text-muted-foreground">Coursera</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge variant="secondary">2024</Badge>
              <Button variant="outline" size="sm" onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/BSUPAHER96A5', '_blank')}>
                <ExternalLink className="w-3 h-3 mr-2" />
                Verify
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="cyber-card h-48 flex items-center justify-center">
        <CardContent className="text-center">
          <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">More certifications in progress...</p>
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

const PresentStatusDashboard = () => (
  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="space-y-6">
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Currently Learning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-primary">Data Structures & Algorithms with Java</h4>
            </div>
            <p className="text-sm text-muted-foreground">Deep diving into fundamental computer science concepts, focusing on efficient problem-solving techniques.</p>
          </div>

          <div className="p-4 border border-secondary/20 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-secondary">Machine Learning Exploration</h4>
            </div>
            <p className="text-sm text-muted-foreground">Exploring advanced ML concepts and practical applications in cybersecurity.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// ======================= MAIN COMPONENT =======================
const InteractiveCubeSection = () => {
  const [selectedFace, setSelectedFace] = useState<string | null>(null);

  const handleFaceClick = (faceName: string) => {
    if (['Coding Highlights', 'Certifications', 'Present Status'].includes(faceName)) {
      setSelectedFace(faceName);
    }
  };

  const closeDashboard = () => setSelectedFace(null);

  const renderDashboard = () => {
    switch (selectedFace) {
      case 'Coding Highlights':
        return <GitHubDashboard />;
      case 'Certifications':
        return <CertificationsDashboard />;
      case 'Present Status':
        return <PresentStatusDashboard />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 relative z-10" id="interactive-cube">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 gradient-text">Interactive Skills Dashboard</h2>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 30%, #5ee7df, #b490ca)' }}>
                <Code className="w-4 h-4 text-white" />
              </div>
              <span>Coding</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 30%, #a8ff78, #78ffd6)' }}>
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span>Status</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 30%, #f6d365, #fda085)' }}>
                <Award className="w-4 h-4 text-white" />
              </div>
              <span>Certifications</span>
            </div>
          </div>
          <p className="text-muted-foreground">Click a planet to explore different aspects of my journey</p>
        </motion.div>

        <div className="relative">
          <OrbitingPlanets onPlanetClick={handleFaceClick} />

          <AnimatePresence>
            {selectedFace && (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="relative mt-8">
                <div className="absolute top-4 right-4 z-10">
                  <Button variant="outline" size="sm" onClick={closeDashboard}>✕ Close</Button>
                </div>
                {renderDashboard()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCubeSection;