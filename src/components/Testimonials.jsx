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
    return (
        <section className="py-24">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-16">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Client Feedback</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Testimonials</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
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
