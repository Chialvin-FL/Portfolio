import React from 'react';
import MagicBento from './MagicBento';
import {
    Code2,
    Globe,
    Server,
    Terminal,
    Cpu,
    Database,
    GitBranch
} from 'lucide-react';

const techStackData = [
    {
        title: 'Programming',
        label: 'Core',
        description: 'C, C#, Java, JavaScript, PHP, Kotlin, Assembly, Python',
        icon: <Terminal size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Web Dev',
        label: 'Frontend',
        description: 'React, Vite, Tailwind, HTML/CSS, ASP.NET, Laravel, Figma',
        icon: <Globe size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'AI & ML',
        label: 'Intelligence',
        description: 'OpenCV, TensorFlow, Keras, HuggingFace, Transformers',
        icon: <Cpu size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Backend & Tools',
        label: 'Infrastructure',
        description: 'Node.js, FastAPI, Firebase, MySQL, MongoDB, PostgreSQL',
        icon: <Server size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'DevOps',
        label: 'Deployment',
        description: 'IIS, Cloudflare, Nginx, Google Cloud Platform',
        icon: <Code2 size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    },
    {
        title: 'Version Control',
        label: 'Collaboration',
        description: 'GitHub, Git, Project Management',
        icon: <GitBranch size={20} />,
        color: 'rgba(2, 6, 23, 0.5)'
    }
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Technology Stack</h3>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building high-performance, scalable applications across platforms.
                    </p>
                </div>

                <MagicBento
                    items={techStackData}
                    textAutoHide={false}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={400}
                    particleCount={15}
                    glowColor="14, 165, 233" // Primary Sky Blue
                />
            </div>
        </section>
    );
};

export default TechStack;
