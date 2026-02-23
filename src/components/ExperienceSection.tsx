import { motion } from 'motion/react';

const posts = [
  {
    id: 1,
    title: 'Backend Developer at TTB',
    date: '2023 - Present',
    description: 'Developing backend systems for customer-facing and internal platforms in banking. Built REST APIs for messaging, digital wallet, and contracts. Designed rule-based API execution platform supporting dynamic workflows.',
    thumbnail: '💼',
  },
  {
    id: 2,
    title: 'Volunteer: Rethinking Mekong Defenses',
    date: '2024',
    description: 'Led backend development for digital storytelling platform. Implemented system architecture and optimized data presentation features for collaborative design project.',
    thumbnail: '🌍',
  },
  {
    id: 3,
    title: 'Computer Science @ KMUTT',
    date: '2018 - 2023',
    description: 'Graduated with GPAX 3.61. Focused on software engineering, backend architecture, and system design. Built foundation in Java Spring Boot and database management.',
    thumbnail: '🎓',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl text-foreground font-normal">Posts</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer flex gap-6"
            >
              <div className="w-24 h-24 flex-shrink-0 bg-background rounded-xl flex items-center justify-center text-4xl">
                {post.thumbnail}
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-foreground mb-1 font-medium">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}