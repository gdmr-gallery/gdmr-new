import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  BriefcaseBusiness,
  Building2,
  Megaphone,
  Paintbrush,
  Printer,
  UsersRound,
  Laptop,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    title: 'Engineering Solutions',
    icon: Building2,
    description:
      'Civil, structural, and execution support for commercial and retail infrastructure with precision planning and on-ground reliability.'
  },
  {
    title: 'Brand Building',
    icon: BriefcaseBusiness,
    description:
      'Positioning businesses into memorable brands through strategic identity, storytelling, and market-led growth direction.'
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    description:
      'Performance campaigns, social strategy, content ecosystems, and analytics-driven lead generation for scale.'
  },
  {
    title: 'Visual Merchandising',
    icon: Paintbrush,
    description:
      'Retail and in-store visual systems that increase discoverability, improve customer flow, and elevate shelf impact.'
  },
  {
    title: 'Printing Solutions',
    icon: Printer,
    description:
      'Imported printing systems and execution pipelines for high-quality outputs across retail branding and marketing assets.'
  },
  {
    title: 'HR Solutions & Services',
    icon: UsersRound,
    description:
      'People operations support, hiring assistance, workforce structure, and scalable HR frameworks for growing businesses.'
  },
  {
    title: 'Web Development',
    icon: Laptop,
    description:
      'Modern websites and digital platforms with high-performance UX, conversion architecture, and premium interactions.'
  }
];

const butterflyPath = {
  offscreen: { opacity: 0, scale: 0.6, x: -120, y: 20 },
  onscreen: {
    opacity: 1,
    scale: 1,
    x: [0, 140, -110, 80, -60, 20],
    y: [0, -70, 40, -35, 20, 0],
    rotate: [0, -8, 12, -6, 8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

function Butterfly() {
  return (
    <motion.div
      className="butterfly-wrap"
      variants={butterflyPath}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="butterfly">
        <span className="wing wing-left" />
        <span className="wing wing-right" />
        <span className="body" />
      </div>
    </motion.div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.35
  });

  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.95]);

  return (
    <div className="site-shell">
      <motion.div className="progress" style={{ scaleX }} />

      <header className="hero">
        <motion.div className="hero-overlay" style={{ opacity: glow }} />

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          GDMR FOUNDATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          We Engineer Brands
          <br />
          <span className="text-gradient">That Move Markets.</span>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          A next-generation execution partner across engineering, branding,
          marketing, visual retail systems, HR, printing, and web development.
        </motion.p>

        <motion.a
          href="#services"
          className="cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Capabilities <ArrowRight size={18} />
        </motion.a>

        <Butterfly />
      </header>

      <main>
        <section id="services" className="services-section">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <h2>Integrated Services. One Transformation Engine.</h2>
            <p>
              Scroll through each unit. Every block is crafted to feel alive,
              dimensional, and premium—just like your future brand experience.
            </p>
          </motion.div>

          <div className="grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="card"
                  initial={{ opacity: 0, y: 55, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="showcase">
          <motion.div
            className="showcase-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mini-tag">
              <Sparkles size={16} /> Interactive Journey Concept
            </p>
            <h2>Scroll-driven storytelling inspired by luxury experiences.</h2>
            <p>
              We can extend this into a frame-by-frame motion scene (like a
              watch reveal) where each section unfolds with layered components,
              product mechanics, and cinematic transitions.
            </p>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} GDMR Foundation • Build. Brand. Scale.</p>
      </footer>
    </div>
  );
}

export default App;
