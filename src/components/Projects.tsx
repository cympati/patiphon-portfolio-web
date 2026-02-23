import { motion } from 'motion/react';
import exampleImage from 'figma:asset/cc52b61e5f7f4a775e10f0e78f4cbad145094a2a.png';

const projects = [
  {
    id: 1,
    title: 'Enterprise API Builder',
    category: 'Platform / 2024',
    description: 'Internal platform enabling dynamic, rule-based API execution flows for enterprise applications.',
    image: exampleImage,
    color: '#f05c41',
  },
  {
    id: 2,
    title: 'Digital Wallet Integration',
    category: 'Banking / 2023',
    description: 'Backend system handling digital wallet data and transaction workflows in production banking environment.',
    image: exampleImage,
    color: '#6b72b1',
  },
];

export function Projects() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl text-foreground">Projects</h2>
        <button className="text-sm text-foreground/50 hover:text-foreground transition-colors">
          View all
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl text-foreground">{project.title}</h3>
                <span className="text-sm text-foreground/50">{project.category}</span>
              </div>
              <p className="text-foreground/70 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
