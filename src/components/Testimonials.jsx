import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import KuwaGo from '../assets/KuwaGo.jpg';
import MiManu from '../assets/MiManu.jpg';
import TrabaHub from '../assets/TrabaHub.jpg';

const testimonials = [
    {
        id: 1,
        name: "KuwaGo Team",
        role: "FinTech Masterals",
        content: "We were impressed by the system’s performance and responsiveness. Advanced features were implemented seamlessly, and the interface is intuitive and easy to use. All our requirements were delivered with precision.",
        image: KuwaGo,
        bgImage: KuwaGo
    },
    {
        id: 2,
        name: "MiManuTMS",
        role: "FinTech Masterals",
        content: "They handled complex functionalities with ease and transformed them into a fast, reliable, and user-friendly platform. The workflow is smooth, the UI/UX feels natural, and every requirement was met exactly as expected.",
        image: MiManu,
        bgImage: MiManu
    },
    {
        id: 3,
        name: "TrabaHub",
        role: "FinTech Masterals",
        content: "The application runs efficiently with optimized performance and well-executed advanced features. The interface is clean, intuitive, and easy for users to navigate. Overall satisfaction from us has been outstanding.",
        image: TrabaHub,
        bgImage: TrabaHub
    }

];

const FlipCard = ({ t, i }) => {
    return (
        <div className="group w-full aspect-video [perspective:1200px]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 180 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1,
                    rotateY: { duration: 0.6, ease: "easeInOut" }
                }}
                className="relative h-full w-full rounded-2xl [transform-style:preserve-3d] will-change-transform"
            >
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-dark p-10 border border-white/5 [backface-visibility:hidden] flex flex-col justify-between text-left">
                    <div>
                        <Quote className="absolute top-8 right-8 text-primary/20" size={48} />
                        <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" />
                        <div>
                            <h5 className="text-white font-bold">{t.name}</h5>
                            <span className="text-primary text-sm">{t.role}</span>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 h-full w-full rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-primary/30"
                >
                    <img
                        src={t.bgImage}
                        alt="Background"
                        className="h-full w-full object-cover opacity-60"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent flex flex-col justify-end p-8 text-left">
                        <h5 className="text-white font-bold text-xl mb-1">{t.name}</h5>
                        <p className="text-primary font-medium">{t.role}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

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
                        <FlipCard key={t.id} t={t} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
