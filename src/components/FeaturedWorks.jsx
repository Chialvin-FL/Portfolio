import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Play } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-97-large.mp4", // Placeholder
        description: "A comprehensive dashboard for managing online stores. Features real-time analytics, inventory management, and order processing.",
        tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
    {
        id: 2,
        title: "Social Media Analytics",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4", // Placeholder
        description: "Visualizing complex social media data into actionable insights using D3.js and Python backend.",
        tech: ["Python", "Django", "D3.js", "Redis"],
    },
    {
        id: 3,
        title: "Health Tracker App",
        category: "Mobile Application",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-red-and-blue-digital-technology-connection-1718-large.mp4", // Placeholder
        description: "Cross-platform mobile app for tracking fitness goals, nutrition, and sleep patterns.",
        tech: ["React Native", "Firebase", "HealthKit"],
    },
    {
        id: 4,
        title: "AI Content Generator",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-2738-large.mp4", // Placeholder
        description: "AI-powered tool helping marketers generate blog posts, captions, and ad copy in seconds.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
];

const FeaturedWorks = () => {
    const [selectedId, setSelectedId] = useState(null);

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
        <section id="featured-works" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Featured Works</motion.h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-secondary border border-white/5 hover:border-primary/50 transition-all"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Media Container */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                                />
                                <video
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    autoPlay // In a real app, maybe play on hover
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <p className="text-primary text-sm font-medium mb-1">{project.category}</p>
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white">Tap to view details</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setSelectedId(null)}
                            />

                            <motion.div
                                layoutId={selectedId}
                                className="bg-secondary w-full max-w-3xl rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors z-20"
                                >
                                    <X size={20} />
                                </button>

                                {(() => {
                                    const project = projects.find(p => p.id === selectedId);
                                    return (
                                        <div className="flex flex-col md:flex-row h-[70vh] md:h-auto">
                                            <div className="md:w-1/2 relative h-64 md:h-auto">
                                                <video
                                                    src={project.video}
                                                    muted
                                                    loop
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent md:bg-gradient-to-r" />
                                            </div>

                                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                                <span className="text-primary font-medium mb-2">{project.category}</span>
                                                <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                                                <p className="text-slate-400 mb-6 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                <div className="mb-8">
                                                    <h4 className="text-white font-medium mb-3">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map(t => (
                                                            <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 mt-auto">
                                                    <button className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                                                        <ExternalLink size={18} /> Live Demo
                                                    </button>
                                                    <button className="flex-1 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                                                        <Github size={18} /> Source Code
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FeaturedWorks;
