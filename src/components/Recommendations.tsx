import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    text: 'Patiphon brings exceptional technical expertise and collaborative mindset to every project. His ability to translate complex business requirements into elegant backend solutions has consistently impressed our entire team.',
    author: 'Team Lead',
    role: 'Engineering Manager @ODDS TEAM',
  },
  {
    id: 2,
    text: 'Working with Patiphon has been transformative for our development process. His deep understanding of both system architecture and business logic allows him to bridge gaps that most professionals can\'t.',
    author: 'Product Team',
    role: 'Product Manager @TTB',
  },
];

export function Recommendations() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl text-foreground">Recommendations</h2>
      </div>

      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background rounded-2xl p-8 relative"
          >
            <Quote size={32} className="text-primary/20 mb-4" />
            <p className="text-foreground/70 italic mb-6 leading-relaxed">
              "{rec.text}"
            </p>
            <div>
              <p className="text-foreground font-medium">{rec.author}</p>
              <p className="text-foreground/50 text-sm">{rec.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
