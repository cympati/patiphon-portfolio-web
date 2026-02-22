import { motion } from 'motion/react';
import { Mail, Github, Phone, MessageSquare, BookOpen } from 'lucide-react';
import { useInView } from './useInView';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'patiphon@odds.team', href: 'mailto:patiphon@odds.team', tooltip: 'Email' },
  { icon: Github, label: 'GitHub', value: 'github.com/cympati', href: 'https://github.com/cympati', tooltip: 'GitHub' },
  { icon: Phone, label: 'Phone', value: '+66 95 660 0463', href: 'tel:+66956600463', tooltip: 'Phone' },
  { icon: MessageSquare, label: 'Discord', value: 'cream#3595', href: '#', tooltip: 'Discord' },
  { icon: BookOpen, label: 'Medium', value: 'medium.com/@cympati', href: 'https://medium.com/@cympati', tooltip: 'Medium' },
];

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Always open to discussing backend architecture, collaborative opportunities,
            or just connecting with fellow developers
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-8 mb-20">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: 'spring' }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={contact.href}
                  className="w-20 h-20 bg-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  target={contact.label === 'GitHub' || contact.label === 'Medium' ? '_blank' : undefined}
                  rel={contact.label === 'GitHub' || contact.label === 'Medium' ? 'noopener noreferrer' : undefined}
                  aria-label={contact.label}
                >
                  <Icon size={32} className="text-background" />
                </a>
                
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                  >
                    {contact.tooltip}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center border-t border-border pt-12 max-w-4xl mx-auto"
        >
          <p className="text-2xl text-foreground/80 italic mb-6">
            "Building reliable backend systems that quietly power real user experiences."
          </p>
          <p className="text-foreground/50">
            © {new Date().getFullYear()} Patiphon Klangpraphan
          </p>
        </motion.div>
      </div>
    </section>
  );
}