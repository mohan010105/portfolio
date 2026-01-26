import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Excel Analytics Platform",
    problem: "Full-stack analytics platform processing Excel files and generating interactive insights",
    highlights: [
      "Excel file upload (.xls / .xlsx)",
      "Dynamic chart generation",
      "Data-driven insights"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    role: "Web Developer",
    github: "https://github.com/mohan010105/Excel-Analytics-Dashboard-Design.git"
  },
  {
    title: "Musify",
    problem: "Modern music streaming application with dynamic playback controls and interactive UI",
    highlights: [
      "Playlist management",
      "Play / pause / skip / shuffle",
      "Responsive UI"
    ],
    tech: ["React", "JavaScript", "TailwindCSS", "Firebase"],
    role: "Frontend / Full-Stack",
    github: "https://github.com/mohan010105/musifyproject.git"
  },
  {
    title: "Cloud Drive",
    problem: "Cloud-based file storage and management system with secure access control",
    highlights: [
      "Secure file upload & retrieval",
      "User-based access",
      "Clean dashboard UI"
    ],
    tech: ["React", "Backend APIs", "Cloud Storage", "Supabase"],
    role: "Full-Stack",
    github: "https://github.com/mohan010105/GoogleDrive.git"
  },
  {
    title: "Resume Builder",
    problem: "Dynamic resume builder generating professional resumes from structured input",
    highlights: [
      "Real-time preview",
      "Structured sections",
      "Export-ready design"
    ],
    tech: ["React", "JavaScript", "TailwindCSS", "Firebase"],
    role: "Frontend",
    live: "https://profile-x-sigma.vercel.app/"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-8 bg-gradient-to-b from-background via-background/95 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-sm uppercase tracking-widest text-accent mb-4 font-medium">
            Selected Work
          </h2>
          <p className="text-3xl md:text-4xl font-semibold mb-16 text-foreground">
            Building solutions that scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full bg-card border border-border rounded-lg p-8 cursor-pointer transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded bg-accent/50" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.problem}
                </p>

                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    {project.role}
                  </span>
                </div>

                {/* Tech stack + links */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground border border-border px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                      >
                        GitHub <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                      >
                        Live <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
