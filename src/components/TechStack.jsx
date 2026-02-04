import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
    "PROGRAMMING": [
        "C", "C# Core Web API", "C# GUI", "Java", "JavaScript", "PHP", "Kotlin", "Assembly", "Python"
    ],
    "WEB DEVELOPMENT": [
        "HTML/CSS", "Tailwind", "jQuery", "React", "Vite", "React Native", "ASP.NET", "MVC",
        "MVVM", "Laravel", "Swagger API", "Figma", "AntDesign"
    ],
    "BACKEND & TOOLS": [
        "LINQ", "Refit", "Axios", "Redux", "Node.js", "FastAPI", "Firebase", "MySQL", "MongoDB", "PostgreSQL", "Cloudinary"
    ],
    "DEVOPS & DEPLOYMENT": [
        "IIS", "Cloudflare", "Nginx", "Google Cloud"
    ],
    "INTEGRATIONS": [
        "Google Maps API", "Google AI Studio (AI/ML integrations)", "MQTT", "PayMongo", "Stripe", "Twilio"
    ],
    "AI & MACHINE LEARNING": [
        "OpenCV", "TensorFlow/Keras", "HuggingFace Transformers", "AI/Machine Learning"
    ],
    "VERSION CONTROL": [
        "GitHub"
    ]
};

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Technology Stack</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(techStack).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-dark/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors h-full"
                        >
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-primary/20 pb-2 inline-block">
                                {category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-800/50 hover:bg-primary/20 text-slate-300 hover:text-white rounded-lg text-sm transition-all duration-300 border border-white/5 hover:border-primary/50"
                                    >
                                        {skill}
                                    </span>
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
