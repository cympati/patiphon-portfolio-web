import { motion } from 'motion/react';
import { Mail, Github, Phone, MessageSquare, BookOpen } from 'lucide-react';

export function ProfileCard() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/cympati', label: 'GitHub' },
    { icon: Mail, href: 'mailto:patiphon@odds.team', label: 'Email' },
    { icon: Phone, href: 'tel:+66956600463', label: 'Phone' },
    { icon: BookOpen, href: 'https://medium.com/@cympati', label: 'Medium' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background rounded-3xl p-10 shadow-lg sticky top-8"
    >
      {/* Profile Image Placeholder */}
      <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-3xl text-white">
        PK
      </div>

      {/* Name & Title */}
      <h1 className="text-3xl text-center mb-2 text-foreground">
        Patiphon Klangpraphan
      </h1>
      <p className="text-center text-foreground/60 mb-6">
        Backend Software Engineer, ODDS Team
      </p>

      {/* Bio */}
      <p className="text-center text-foreground/70 text-sm leading-relaxed mb-8">
        Building at the intersection of backend architecture and business logic. 
        Passionate about creating reliable systems that handle real production traffic. 
        Currently @ODDS Team.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-8">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.label === 'GitHub' || social.label === 'Medium' ? '_blank' : undefined}
              rel={social.label === 'GitHub' || social.label === 'Medium' ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label={social.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="block w-full text-center bg-foreground text-background py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
      >
        Get in touch
      </a>

      {/* Quick Info */}
      <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-foreground/50">Location</span>
          <span className="text-foreground">Bangkok, TH</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/50">Education</span>
          <span className="text-foreground">KMUTT</span>
        </div>
        <div className="flex justify-between">
          <span className="text-foreground/50">GPAX</span>
          <span className="text-foreground">3.61</span>
        </div>
      </div>
    </motion.div>
  );
}
