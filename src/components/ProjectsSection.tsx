import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Wavelength',
    category: 'Resource / 2025',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    title: 'Spectrum Flow',
    category: 'Resource / 2024',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl text-foreground font-normal">Projects</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg text-foreground font-normal">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
