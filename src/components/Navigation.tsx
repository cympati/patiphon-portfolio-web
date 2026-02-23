import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: 'https://github.com/cympati', external: true },
  { label: 'Get in touch', href: '#contact' },
];

export function NavigationMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div
        className={`bg-card rounded-full px-8 py-4 flex items-center gap-8 transition-shadow duration-300 ${
          isScrolled ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        {/* Logo/Name */}
        <a
          href="#about"
          className="text-foreground font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
        >
          Patiphon Klangpraphan
        </a>

        {/* NavigationMenu Items */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
