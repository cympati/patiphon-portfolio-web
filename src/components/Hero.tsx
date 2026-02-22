import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight tracking-normal">
            Patiphon Klangpraphan is<br />
            Backend Software Engineer<br />
            at TTB
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate from KMUTT. Building reliable backend systems with Java Spring Boot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}