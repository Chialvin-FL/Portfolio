import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Globe } from 'lucide-react';

const WhoWeAre = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="who-we-are" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">The Team</motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</motion.h3>
                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
                            We are a synchronized duo bridging the gap between design and functionality.
                            While one masters the pixel-perfect frontend, the other engineers the invincible backend.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Frontend Developer Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                <Globe className="text-white" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">The Architect</h4>
                            <p className="text-primary font-medium mb-4">Frontend Specialist</p>
                            <p className="text-slate-400 mb-6">
                                Translating complex visions into interactive, responsive, and beautiful user interfaces.
                                Obsessed with animations, accessibility, and user experience.
                            </p>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> React & Next.js Ecosystem</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Advanced Animations (GSAP, Framer)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> UI/UX Architecture</li>
                            </ul>
                        </motion.div>

                        {/* Backend Developer Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                <Server className="text-white" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">The Engineer</h4>
                            <p className="text-indigo-400 font-medium mb-4">Backend Specialist</p>
                            <p className="text-slate-400 mb-6">
                                Building the robust foundations that power applications. Scalable architectures,
                                secure APIs, and high-performance database management.
                            </p>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Scalable API Design</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Database Architecture</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Cloud Infrastructure</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAre;
