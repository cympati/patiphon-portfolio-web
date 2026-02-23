import { motion } from 'motion/react';
import { Mail, Github, Phone, MessageSquare, BookOpen } from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'patiphon@odds.team', href: 'mailto:patiphon@odds.team' },
    { icon: Github, label: 'GitHub', value: 'github.com/cympati', href: 'https://github.com/cympati' },
    { icon: Phone, label: 'Phone', value: '+66 95 660 0463', href: 'tel:+66956600463' },
    { icon: MessageSquare, label: 'Discord', value: 'cream#3595', href: '#' },
    { icon: BookOpen, label: 'Medium', value: 'medium.com/@cympati', href: 'https://medium.com/@cympati' },
  ];

  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-foreground font-normal mb-4">Get in touch</h2>
          <p className="text-muted-foreground">
            Always open to discussing backend architecture, collaborative opportunities, or just connecting with fellow developers.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8">
          <div className="space-y-4">
            {contactMethods.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'GitHub' || contact.label === 'Medium' ? '_blank' : undefined}
                  rel={contact.label === 'GitHub' || contact.label === 'Medium' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-background" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
