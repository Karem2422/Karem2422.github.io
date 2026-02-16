"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "abdulkaremghassan@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        I'm currently available for freelance projects and full-time opportunities.
                        If you have a project that needs some creative touch, or just want to say hi, my inbox is always open.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const subject = `Portfolio Contact from ${formData.get("name")}`;
                            const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${formData.get("message")}`;
                            window.location.href = `mailto:abdulkaremghassan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                        className="space-y-4 text-left"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                placeholder="Abdulkarem Ghassan"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                placeholder="kareem@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Send Message via Email App
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-6 text-slate-400 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-emerald-400" />
                            <span>{email}</span>
                            <button
                                onClick={handleCopyEmail}
                                className="text-slate-500 hover:text-white transition-colors flex items-center gap-1"
                                title="Copy email"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                {copied && <span className="text-[10px] text-emerald-400">Copied!</span>}
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/abdulkareem-ghassan-a4297b356?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors"
                            >
                                LinkedIn
                            </a>
                            <a href="https://github.com/Karem2422" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
                            <a
                                href="https://www.instagram.com/its.abdulkareem?utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-400 transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </motion.div >
            </div >
        </section >
    );
};

export default Contact;
