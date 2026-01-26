import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const journey = [
  {
    period: "Aug 2024 - Sep 2024",
    role: "Artificial Intelligence Intern",
    company: "Corizo",
    responsibilities: [
      "Assisted in the integration of AI and machine learning features into software applications",
      "Worked on data collection, preprocessing, and feature preparation for model inference",
      "Supported backend services to enable AI-driven logic and decision-making",
      "Participated in testing, evaluating, and improving model performance",
      "Followed best practices for code quality, version control, and technical documentation"
    ],
    technologies: ["Python", "Machine Learning", "Natural Language Processing"]
  },
  {
    period: "Feb 2025 - Mar 2025",
    role: "Frontend Developer Intern",
    company: "Q-Spider",
    responsibilities: [
      "Developed and enhanced the **Musify** music streaming application using React",
      "Implemented audio playback controls including play, pause, skip, and shuffle features",
      "Built responsive UI components and managed application state for seamless user interaction",
      "Improved user experience through smooth animations, transitions, and intuitive UI design"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"]
  },
  {
    period: "Jun 2025 - Sep 2025",
    role: "Web Development Intern",
    company: "Zidio",
    responsibilities: [
      "Developed key features for the **Excel Analytics Platform**, enabling Excel file upload and data visualization",
      "Implemented data processing logic to generate charts and insights from uploaded datasets",
      "Collaborated with mentors to structure clean, reusable code for analytics workflows",
      "Contributed to debugging, optimization, and technical documentation for the platform"
    ],
    technologies: ["JavaScript", "Excel", "Firebase", "GitHub"]
  },
  {
  period: "Dec 2025 - Present",
  role: "Full-Stack Development",
  company: "Labmantix",
  responsibilities: [
    "Developed and maintained core features of a **Cloud Drive application** enabling secure file upload, storage, and retrieval",
    "Implemented backend logic to handle file metadata, access control, and user-specific storage workflows",
    "Built responsive frontend components to manage files, folders, and user interactions",
    "Collaborated with team members to ensure clean code practices, debugging, and technical documentation"
  ],
  technologies: ["JavaScript", "Next.js", "Supabase", "GitHub"]
}


];


export function ProfessionalJourney() {
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
          <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
            Professional Journey
          </h2>
          <p className="text-3xl md:text-4xl font-semibold mb-16 text-foreground">
            Real-world experience building systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {journey.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                  <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="text-sm text-accent font-medium mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-muted-foreground mb-6">
                      {exp.company}
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="mb-6">
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.responsibilities.map((responsibility, rIndex) => (
                          <motion.li
                            key={rIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + rIndex * 0.1,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 ${
                              index % 2 === 0 ? 'md:order-2' : ''
                            }`} />
                            <span className="flex-1">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-accent/90 bg-accent/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
