import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

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

    const team = [
        {
            name: "Javi A. Torres",
            roleTitle: "The Architect",
            tagline: "Frontend Specialist",
            description: "Translating complex visions into interactive, responsive, and beautiful user interfaces. Obsessed with animations, accessibility, and user experience.",
            bulletPoints: [
                "React & Next.js Ecosystem",
                "Advanced Animations (GSAP, Framer)",
                "UI/UX Architecture"
            ],
            handle: "javicodes",
            status: "Online",
            avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            contactText: "Contact Me",
            behindGlowColor: "rgba(14, 165, 233, 0.4)"
        },
        {
            name: "Elena V. Smith",
            roleTitle: "The Engineer",
            tagline: "Backend Specialist",
            description: "Building the robust foundations that power applications. Scalable architectures, secure APIs, and high-performance database management.",
            bulletPoints: [
                "Scalable API Design",
                "Database Architecture",
                "Cloud Infrastructure"
            ],
            handle: "elenadev",
            status: "In a meeting",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
            contactText: "Let's Talk",
            behindGlowColor: "rgba(99, 102, 241, 0.4)"
        }
    ];

    return (
        <section id="who-we-are" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <motion.h2 variants={itemVariants} className="text-primary text-sm font-bold uppercase tracking-widest mb-2">The Team</motion.h2>
                        <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">Creative Duo</motion.h3>
                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            A synchronized team bridging the gap between design and functionality.
                            We build high-performance applications with a focus on user experience and robust architecture.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 justify-items-center max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ProfileCard
                                    name={member.name}
                                    title={member.tagline}
                                    roleTitle={member.roleTitle}
                                    tagline={member.tagline}
                                    description={member.description}
                                    bulletPoints={member.bulletPoints}
                                    handle={member.handle}
                                    status={member.status}
                                    avatarUrl={member.avatarUrl}
                                    contactText={member.contactText}
                                    showUserInfo
                                    enableTilt={true}
                                    enableMobileTilt={false}
                                    showBehindGlow
                                    behindGlowColor={member.behindGlowColor}
                                    onContactClick={() => {
                                        const element = document.querySelector('#contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAre;
