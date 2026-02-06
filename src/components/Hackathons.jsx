import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';

const awards = [
    {
        title: "Global AI Hackathon 2024",
        award: "1st Place Winner",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Developed an autonomous drone delivery system routing algorithm.",
        date: "March 2024"
    },
    {
        title: "FinTech Innovation Challenge",
        award: "Best UX Design",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Created a simplified investment platform for Gen Z users.",
        date: "November 2023"
    },
    {
        title: "Green Tech Summit",
        award: "Audience Choice Award",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Smart energy monitoring dashboard for household appliances.",
        date: "August 2023"
    }
];

const Hackathons = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="hackathons" className="py-24 bg-dark/95 backdrop-blur-sm relative overflow-hidden border-y border-white/5 shadow-2xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16"
                >
                    <div>
                        <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Achievements</motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Awards and Certifications</motion.h3>
                    </div>
                    <motion.p variants={itemVariants} className="text-slate-400 mt-4 md:mt-0 max-w-md text-right md:text-right text-left">
                        Competing against the best minds to solve real-world problems under pressure.
                    </motion.p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {awards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
                            className="group relative flex flex-col md:flex-row gap-8 items-center bg-secondary/30 rounded-3xl p-6 border border-white/5 hover:border-primary/30 hover:bg-secondary/50 transition-all"
                        >
                            <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2 text-yellow-400 font-bold uppercase tracking-wider text-sm">
                                    <Trophy size={16} />
                                    {item.award}
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
                                <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
