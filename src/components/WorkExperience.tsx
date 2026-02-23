import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'TTB - ODDS Team',
    role: 'Backend Developer',
    period: '2023 - Present',
    type: 'Banking / Enterprise',
    description: 'Developing backend systems for customer-facing and internal enterprise platforms in a large banking environment.',
    keyPoints: [
      'Designed and implemented REST APIs supporting messaging, digital wallet, and contract workflows',
      'Built backend architecture from scratch for time-sensitive projects and deployed to production',
      'Developed internal API builder platform with dynamic, rule-based execution flows',
      'Integrated Python script execution within Java backend and led cross-language architecture POC',
    ],
    tech: ['Java Spring Boot', 'PostgreSQL', 'MongoDB', 'Python', 'Azure Event Hubs'],
    color: '#f05c41',
  },
  {
    id: 2,
    title: 'Rethinking Mekong Defenses',
    role: 'Backend Developer',
    period: '2024',
    type: 'Volunteer',
    description: 'Digital storytelling platform focused on collaborative work across design and development teams.',
    keyPoints: [
      'Developed backend logic and system architecture',
      'Implemented data presentation features and optimized performance',
    ],
    tech: ['Backend Development', 'System Architecture'],
    link: 'https://rethinking-mekong-defenses.odd.works/',
    color: '#01984a',
  },
];

export function WorkExperience() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl text-foreground">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl mb-1 text-foreground">{exp.title}</h3>
                <p className="text-lg mb-2" style={{ color: exp.color }}>
                  {exp.role}
                </p>
              </div>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-foreground/50 mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
              <span>•</span>
              <span>{exp.type}</span>
            </div>

            <p className="text-foreground/70 mb-4 leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-6">
              {exp.keyPoints.map((point, idx) => (
                <li key={idx} className="text-foreground/70 text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-card text-foreground/70 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
