import { motion } from 'motion/react';

const recommendations = [
  {
    id: 1,
    text: 'Jenny brings an exceptional blend of technical expertise and design sensibility to every project. Her ability to translate complex problems into elegant solutions has consistently impressed our entire team. A true innovator in the field.',
    author: 'Sarah Chen',
    role: 'Design Director @Studio Flux',
  },
  {
    id: 2,
    text: "Working with Jenny has been transformative for our product development process. Her deep understanding of both engineering and design principles allows her to bridge gaps that most professionals can't. She's not just a problem solver - she's a vision creator.",
    author: 'Marcus Rivera',
    role: 'Head of Product @TechFlow',
  },
];

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl text-foreground font-normal">Recommendations</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all
          </button>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 relative"
            >
              <div className="text-6xl text-muted-foreground/20 mb-4 leading-none">"</div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {rec.text}
              </p>
              <div>
                <p className="text-foreground font-medium">{rec.author}</p>
                <p className="text-sm text-muted-foreground">{rec.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
