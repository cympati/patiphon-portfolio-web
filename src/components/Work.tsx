import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with seamless checkout and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzcxNjUyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1651055693398-0d66969cf759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE3MzI3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Clean and elegant portfolio for a creative professional.',
    tags: ['Next.js', 'TypeScript', 'Framer'],
    image: 'https://images.unsplash.com/photo-1712425718855-5169714b3632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcG9ydGZvbGlvJTIwZGVzaWdufGVufDF8fHx8MTc3MTc0MzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with beautiful UI.',
    tags: ['React', 'API', 'Charts'],
    image: 'https://images.unsplash.com/photo-1759488820765-5cf0755965ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTc0MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Connect and share with friends in a modern social platform.',
    tags: ['React', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NzE3NDMxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track your workouts and achieve your fitness goals.',
    tags: ['React Native', 'Redux', 'Node'],
    image: 'https://images.unsplash.com/photo-1769893841740-fc98ce39a3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MTY4NDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '#',
    github: '#',
  },
];

export function Work() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="work" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">Selected Work</h2>
          <p className="text-lg text-foreground/60 mb-16 max-w-2xl">
            A collection of projects that showcase my skills and passion for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
                      aria-label="View code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-foreground">{project.title}</h3>
                  <p className="text-foreground/60 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary/30 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}