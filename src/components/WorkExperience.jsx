import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        year: "2024 - Present",
        role: "Senior Full Stack Engineers",
        company: "Freelance",
        description: "Delivering high-performance web applications for international clients. Specializing in e-commerce and SaaS solutions.",
        side: "left"
    },
    {
        year: "2022 - 2024",
        role: "Lead Frontend Developer",
        company: "TechNova Solutions",
        description: "Led the frontend team in rebuilding the core product dashboard, improving load times by 40%.",
        side: "right"
    },
    {
        year: "2021 - 2023",
        role: "Backend System Architect",
        company: "DataFlow Systems",
        description: "Designed scalable microservices architecture handling over 1M requests per day.",
        side: "left"
    },
    {
        year: "2020 - 2021",
        role: "Junior Developers",
        company: "StartUp Inc.",
        description: "Started our journey collaborating on internal tools and client-facing websites.",
        side: "right"
    },
];

const WorkExperience = () => {
    // Use a ref for the section to track its scroll progress
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 0.7", "end 0.3"]
    });

    // Transform scroll progress to height for the line
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        <section id="experience" className="py-24 relative overflow-hidden" ref={targetRef}>
            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Our Journey</motion.h2>
                    <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">Work Experience</motion.h3>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line Background (Dark) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full" />

                    {/* Moving Line (Primary Color) with Shimmer */}
                    <motion.div
                        style={{
                            height: lineHeight,
                            backgroundImage: "linear-gradient(to bottom, #0ea5e9 0%, #0ea5e9 40%, #ffffff 50%, #6366f1 60%, #6366f1 100%)",
                            backgroundSize: "100% 300%"
                        }}
                        animate={{
                            backgroundPositionY: ["0%", "100%"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full origin-top shadow-[0_0_25px_rgba(255,255,255,0.9),0_0_15px_rgba(14,165,233,0.6)]"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index} data={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Subcomponent for individual timeline items
const TimelineItem = ({ data, index }) => {
    const isLeft = index % 2 === 0; // Alternating sides

    return (
        <div className={`relative flex items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Spacer for the other side */}
            <div className="hidden md:block w-5/12" />

            {/* Center Dot */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-dark border-4 border-slate-700 rounded-full z-10 group-hover:border-primary transition-colors">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-30% 0px -20% 0px" }}
                    className="w-full h-full bg-primary rounded-full"
                />
            </div>

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30% 0px -20% 0px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="w-full md:w-5/12 p-6 bg-secondary/80 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
                <span className="text-primary font-mono text-sm mb-2 block">{data.year}</span>
                <h4 className="text-xl font-bold text-white mb-1">{data.role}</h4>
                <h5 className="text-slate-400 font-medium text-sm mb-3">{data.company}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {data.description}
                </p>
            </motion.div>
        </div>
    );
};

export default WorkExperience;
