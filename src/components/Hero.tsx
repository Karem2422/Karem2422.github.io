"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-3xl animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-sky-400 text-sm font-medium mb-6">
                        Available for hire
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Abdulkarem Ghassan</span>.
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-3xl mx-auto h-20 md:h-auto">
                        <span className="font-semibold text-slate-200">Full Stack Web</span> |
                        <span className="font-semibold text-slate-200 mx-2">Mobile Development</span> |
                        <span className="font-semibold text-slate-200">Machine Learning & NLP</span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I combine advanced software engineering with AI to solve real-world problems in healthcare and accessibility. Let's build something impactful.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="https://github.com/Karem2422" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/abdulkareem-ghassan-a4297b356?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/its.abdulkareem?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="mailto:abdulkaremghassan@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
                >
                    <ArrowDown className="w-6 h-6 text-slate-500 animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
