import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useInView } from './useInView';

const experiences = [
  {
    id: 1,
    title: 'TTB - ODDS Team',
    role: 'Backend Developer – Banking / Enterprise Environment',
    period: '2023 - Present',
    description: 'Developed backend systems for customer-facing and internal enterprise platforms in a large banking environment.',
    highlights: [
      'Developed backend systems for customer-facing and internal enterprise platforms in a large banking environment',
      'Designed and implemented REST APIs based on business specifications, supporting high-impact features such as messaging configuration, digital wallet data handling, and contract workflows',
      'Built backend architecture from scratch for time-sensitive projects and successfully deployed to production under tight deadlines',
      'Handled complex conditional data processing and business rule logic in large-scale codebases',
      'Developed internal API builder platform enabling dynamic, rule-based execution flows',
      'Integrated Python script execution within a Java-based backend and participated in architecture POC for cross-language execution strategy',
      'Collaborated across multiple squads and stakeholders in structured corporate workflows',
    ],
    tech: ['Java Spring Boot', 'PostgreSQL', 'MongoDB', 'Liquibase', 'Mockito', 'Python', 'Azure Event Hubs', 'Node TypeScript'],
    color: '#f05c41',
  },
  {
    id: 2,
    title: 'Rethinking Mekong Defenses',
    role: 'Backend Developer (Volunteer)',
    period: '2024',
    description: 'Contributed to a digital storytelling platform focused on collaborative work across design and development teams.',
    highlights: [
      'Developed backend logic and system architecture',
      'Implemented data presentation features',
      'Optimized performance for content delivery',
      'Collaborated with designers and frontend developers',
    ],
    tech: ['Backend Development', 'System Architecture', 'Performance Optimization'],
    link: 'https://rethinking-mekong-defenses.odd.works/',
    color: '#01984a',
  },
];

const educationItems = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'KMUTT (English Program)',
    period: '2020-2024',
    gpax: '3.61',
  },
  {
    degree: 'High School',
    school: 'Mukdahan School (Intensive English Program)',
    period: '2014-2020',
    gpax: '3.93',
  },
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground">Experience</h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Building backend solutions that handle real production traffic and complex business requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-10 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-3xl mb-3 text-foreground">{exp.title}</h3>
                <p className="text-lg mb-2" style={{ color: exp.color }}>{exp.role}</p>
                <p className="text-foreground/50">{exp.period}</p>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/70">
                      <ArrowRight className="flex-shrink-0 mt-1" size={18} style={{ color: exp.color }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm bg-card text-foreground rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-4xl mb-12 text-foreground">Education</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationItems.map((edu, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl p-8 text-center"
              >
                <h4 className="text-2xl mb-2 text-foreground">{edu.degree}</h4>
                <p className="text-foreground/60 mb-4">{edu.school}</p>
                <p className="text-foreground/50 text-sm mb-2">{edu.period}</p>
                <p className="text-3xl font-bold text-primary">GPAX {edu.gpax}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}