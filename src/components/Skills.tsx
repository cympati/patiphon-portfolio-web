import { motion } from 'motion/react';
import { Code2, Database, Globe, Layers, TestTube, Box } from 'lucide-react';
import { useInView } from './useInView';

const skillCategories = [
  {
    icon: Code2,
    title: 'Backend Development',
    skills: ['Java (Spring Boot)', 'REST API Design', 'Microservices', 'Python Integration', 'Node.js'],
    color: '#f05c41',
  },
  {
    icon: Database,
    title: 'Database & Storage',
    skills: ['MongoDB', 'PostgreSQL', 'Liquibase', 'Database Design', 'Query Optimization'],
    color: '#6b72b1',
  },
  {
    icon: TestTube,
    title: 'Testing & Quality',
    skills: ['Mockito', 'JUnit', 'Unit Testing', 'Integration Testing', 'Test-Driven Development'],
    color: '#01984a',
  },
  {
    icon: Layers,
    title: 'Architecture & Design',
    skills: ['System Architecture', 'API Design', 'Microservices Pattern', 'Event-Driven Design', 'Rule-Based Systems'],
    color: '#eb7c61',
  },
  {
    icon: Globe,
    title: 'Frontend & Integration',
    skills: ['TypeScript', 'React', 'Node TypeScript', 'Google Maps Platform', 'Figma'],
    color: '#c0798a',
  },
  {
    icon: Box,
    title: 'Tools & Platforms',
    skills: ['Azure Event Hubs', 'Git', 'CI/CD', 'Docker', 'Agile Methodology'],
    color: '#78c287',
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground">Skills</h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            A focused skill set built through real production work, cross-team collaboration,
            and continuous learning in enterprise backend development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon style={{ color: category.color }} size={32} />
                </div>
                <h3 className="text-2xl mb-6 text-foreground">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-foreground/70 flex items-center gap-3 text-lg"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}