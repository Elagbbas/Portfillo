import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const projects = [
        { title: "Matter", desc: "A modern platform built with React and Stripe.", tags: ['React', 'Node', 'Stripe'] },
        { title: "Himaaa", desc: "Analytics dashboard with beautiful animations.", tags: ['React', 'Tailwind'] },
        { title: "Portfolio", desc: "Previous iteration of my personal portfolio.", tags: ['Gatsby', 'Styled Components'] },
    ];

    return (
        <section 
            id="projects" 
            className="py-20 px-7"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
            <div className="container mx-auto max-w-[1100px]">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-5xl font-bold text-white mb-1">Projects</h2>
                    <p className="text-teal-400 text-lg mb-2">Featured Project</p>
                    <div className="w-12 h-0.5 bg-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            whileHover={{
                                scale: 1.07,
                                y: -12
                            }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className="cursor-pointer"
                        >
                            <ProjectCard
                                title={p.title}
                                desc={p.desc}
                                tags={p.tags}
                                index={i}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}