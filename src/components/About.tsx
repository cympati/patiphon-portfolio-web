import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-12 text-foreground">About</h2>
          
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            I've had the opportunity to work in an enterprise banking environment at TTB, where 
            I've grown from experimenting with multiple languages to focusing on Java backend 
            engineering in 2025. My journey has taught me how to navigate both structured 
            corporate processes and tight-deadline situations.
          </p>
          
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            What keeps me engaged is solving real production challenges — whether that's building 
            APIs from scratch, handling complex business logic, or integrating Python execution 
            within Java services. I value collaboration over ego and believe the best solutions 
            come from working across teams and squads.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-foreground/60">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-secondary mb-2">4</h3>
              <p className="text-foreground/60">Major Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-accent mb-2">3.61</h3>
              <p className="text-foreground/60">KMUTT GPAX</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}