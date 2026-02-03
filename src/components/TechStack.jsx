import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
    "Frontend": [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Three.js", level: 75 },
        { name: "TypeScript", level: 85 },
    ],
    "Backend": [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 80 },
    ],
    "DevOps & Tools": [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 90 },
        { name: "Jest", level: 80 },
    ]
};

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Technology Stack</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {Object.entries(techStack).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-dark/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
                        >
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-primary/20 pb-2 inline-block">
                                {category}
                            </h4>
                            <div className="space-y-6">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-300 font-medium">{skill.name}</span>
                                            <span className="text-primary text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
