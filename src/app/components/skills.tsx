import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML","React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB","Firebase", "Supabase"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "GitHub", "Vercel", "Audio API"]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-accent mb-12 font-medium">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="group flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent transition-all group-hover:w-6" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
