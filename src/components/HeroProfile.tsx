import { motion } from 'motion/react';
import { Dribbble, Linkedin, Twitter, Github } from 'lucide-react';

export function HeroProfile() {
  const socialLinks = [
    { icon: Dribbble, href: 'https://github.com/cympati', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/cympati', label: 'GitHub' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto mb-8 bg-foreground rounded-full flex items-center justify-center text-3xl text-background overflow-hidden">
            <span>PK</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl mb-3 text-foreground font-normal">
            Patiphon Klangpraphan
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Software Engineer @ ODDS Team
          </p>

          {/* Bio */}
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            Building software that connects architecture and business needs
            Passionate about reliable systems handling real production traffic
            Currently @ ODDS Team.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}