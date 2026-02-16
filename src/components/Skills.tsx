"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Smartphone, Globe, Database } from "lucide-react";

const skills = [
    {
        category: "AI & Data Science",
        items: ["NLP", "Machine Learning", "Neural Networks", "TensorFlow", "Scikit-learn"],
        icon: <BrainCircuit className="w-10 h-10 text-emerald-400" />,
    },
    {
        category: "Mobile Development",
        items: ["Flutter", "Dart", "Cross-platform UI/UX"],
        icon: <Smartphone className="w-10 h-10 text-sky-400" />,
    },
    {
        category: "Web Development",
        items: ["React.js", "Laravel (PHP)", "REST APIs", "JavaScript", "HTML/CSS"],
        icon: <Globe className="w-10 h-10 text-purple-400" />,
    },
    {
        category: "Backend & Databases",
        items: ["Python", "PHP", "SQL", "MySQL"],
        icon: <Database className="w-10 h-10 text-amber-400" />,
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400 mb-4"
                    >
                        Technical Expertise
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A diverse skillset spanning frontend, backend, and machine learning technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
                        >
                            <div className="mb-4 flex justify-center">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-4 text-center">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300 text-sm">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
