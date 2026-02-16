"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        github?: string;
        demo?: string;
    };
}

const projects: Project[] = [
    {
        title: "AI Chatbot for Autism Support (Senior Project)",
        description: "An intelligent conversational agent designed to assist autistic patients with empathetic interaction patterns.",
        tags: ["NLP", "Neural Networks", "Python", "Flutter"],
        links: { github: "#", demo: "#" },
    },
    {
        title: "Diabetes Prediction Classification Model",
        description: "A comprehensive ML project analyzing patient data to predict diabetes risk using advanced binary and multi-class classification.",
        tags: ["Python", "Scikit-learn", "TensorFlow", "EDA"],
        links: { github: "https://github.com/Karem2422" },
    },
    {
        title: "Needle and Thread E-commerce",
        description: "A dynamic e-commerce web platform with database integration.",
        tags: ["PHP", "MySQL", "Web Design"],
        links: { github: "#", demo: "#" },
    },
    {
        title: "Lumera",
        description: "A sanctuary for artistic expressions, blending artisan leather craftsmanship, fine literature, and original art. Built with an emphasis on quality and the 'Human Touch'.",
        tags: ["E-commerce", "Elegance", "Artisan UX", "Web Design"],
        links: { github: "https://github.com/Karem2422" },
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent works across mobile, web, and AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-slate-800 text-sky-400 rounded-full text-xs font-medium border border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors text-sm font-medium">
                                            <Github className="w-5 h-5 mr-2" />
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors text-sm font-medium">
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
