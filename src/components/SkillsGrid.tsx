import { motion } from 'motion/react';
import { Code2, Database, TestTube, Layers, Globe, Box } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Backend',
    skills: ['Java Spring Boot', 'REST API', 'Microservices', 'Python'],
    color: '#f05c41',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Liquibase'],
    color: '#6b72b1',
  },
  {
    icon: TestTube,
    title: 'Testing',
    skills: ['Mockito', 'JUnit', 'TDD'],
    color: '#01984a',
  },
  {
    icon: Layers,
    title: 'Architecture',
    skills: ['System Design', 'Event-Driven', 'Rule-Based Systems'],
    color: '#eb7c61',
  },
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'Node.js'],
    color: '#c0798a',
  },
  {
    icon: Box,
    title: 'Tools',
    skills: ['Azure', 'Git', 'Docker', 'CI/CD'],
    color: '#78c287',
  },
];

export function SkillsGrid() {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl text-foreground">Skills</h2>

      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${category.color}15` }}
              >
                <Icon style={{ color: category.color }} size={24} />
              </div>
              <h3 className="text-lg mb-3 text-foreground">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/70 text-sm flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
