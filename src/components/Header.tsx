import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Patiphon Klangpraphan', id: 'home', isLogo: true },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <ul className="flex items-center justify-center gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-foreground/70 hover:text-foreground transition-colors ${
                  item.isLogo ? 'font-semibold text-foreground' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}