import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, StartUp Hub",
        content: "Absolutely blown away by the attention to detail. The animations are buttery smooth and the performance is top-notch. Our conversion rates increased by 40% after the redesign.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO, FinTech Sol",
        content: "Working with this duo was seamless. They understood our complex backend requirements and translated them into a user-friendly frontend. Highly recommended!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Marketing Director, CreativeScale",
        content: "Creative, professional, and timely. They brought our brand vision to life in ways we didn't think were possible on the web.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

const Testimonials = () => {
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
        <section className="py-24">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Client Feedback</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Testimonials</motion.h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 }}
                            className="bg-dark p-10 rounded-2xl relative border border-white/5 hover:border-primary/30 transition-all text-left"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/20" size={48} />

                            <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" />
                                <div>
                                    <h5 className="text-white font-bold">{t.name}</h5>
                                    <span className="text-primary text-sm">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
