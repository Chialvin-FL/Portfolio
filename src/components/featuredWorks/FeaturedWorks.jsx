import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturedWorks.css';
import soothera from '../../assets/featuredWorks/soothera.png';
import soothera2 from '../../assets/featuredWorks/soothera2.png';
import kuwago from '../../assets/featuredWorks/kuwago.png';
import kuwago2 from '../../assets/featuredWorks/kuwago2.png';
import iot from '../../assets/featuredWorks/iot.png';
import iot2 from '../../assets/featuredWorks/iot2.png';
import lgu from '../../assets/featuredWorks/lgu.png';
import lgu2 from '../../assets/featuredWorks/lgu2.png';
import trabahub from '../../assets/featuredWorks/trabahub.png';
import trabahub2 from '../../assets/featuredWorks/trabahub2.png';
import helpkonnect from '../../assets/featuredWorks/helpkonnect.png';
import helpkonnect2 from '../../assets/featuredWorks/helpkonnect2.png';
import aquaroute from '../../assets/featuredWorks/aquaroute.png';
import aquaroute2 from '../../assets/featuredWorks/aquaroute2.png';

const projects = [
    {
        id: 1,
        title: "Salon Services Booking Platform",
        category: "Cross-Platform Application",
        image: soothera,
        video: soothera2,
        description: "A cross-platform booking system for salons that streamlines appointment scheduling, service management, staff availability, and customer notifications in one intuitive interface.",
        tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    },
    {
        id: 2,
        title: "Hybrid P2B Lending Platform System",
        category: "Web Application",
        image: kuwago,
        video: kuwago2,
        description: "A secure lending platform connecting private lenders and businesses, featuring loan tracking, approval workflows, repayment monitoring, and financial dashboards.",
        tech: ["Python", "Django", "D3.js", "Redis"],
    },
    {
        id: 3,
        title: "Training Management System",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
        video: "https://assets.mixkit.co/videos/preview/mixkit-red-and-blue-digital-technology-connection-1718-large.mp4",
        description: "A centralized platform for managing employee or student training programs, tracking progress, attendance, certifications, and performance evaluations.",
        tech: ["React Native", "Firebase", "HealthKit"],
    },
    {
        id: 4,
        title: "Veterinary Services Information and Assistance System",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
        video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-2738-large.mp4",
        description: "A digital system for managing veterinary records, patient history, appointment scheduling, and public service information for efficient clinic operations.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 5,
        title: "Mental Healthcare Facility Provider and Assistant Application",
        category: "Cross-Platform Application",
        image: helpkonnect,
        video: helpkonnect2,
        description: "A mental health support platform that connects patients with providers, manages consultations, tracks progress, and offers digital assistance tools for care management.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 6,
        title: "AI-Powered Water Delivery System",
        category: "Mobile Application",
        image: aquaroute,
        video: aquaroute2,
        description: "An intelligent delivery management app that automates scheduling, optimizes routes, predicts demand, and coordinates drivers for efficient water distribution.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 7,
        title: "Web-Based POS System",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
        video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-2738-large.mp4",
        description: "A browser-based point-of-sale system for handling transactions, managing products, tracking sales, and generating financial reports in real time.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 8,
        title: "Booking & Reservation System",
        category: "Web Application",
        image: trabahub,
        video: trabahub2,
        description: "A flexible reservation platform for managing bookings, customer details, schedules, and availability for service-based businesses.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 9,
        title: "IoT Building Management System",
        category: "Web Application",
        image: iot,
        video: iot2,
        description: "An IoT-integrated platform for monitoring and controlling building utilities such as lighting, temperature, and energy usage through real-time dashboards.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 10,
        title: "Municipal LGU-LCR Records Management System",
        category: "Web Application",
        image: lgu,
        video: lgu2,
        description: "A digital records management system for local government civil registry offices, organizing birth, marriage, and death records with secure access and retrieval.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 11,
        title: "POS Inventory and Manufacturing System",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
        video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-2738-large.mp4",
        description: "An integrated system that connects point-of-sale operations with inventory tracking and manufacturing workflows for better stock and production management.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
    {
        id: 12,
        title: "Personal Finance Management Application",
        category: "Mobile Application",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90",
        video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-white-network-connection-2738-large.mp4",
        description: "A mobile app for tracking income, expenses, savings, and budgets, helping users manage their finances with clear insights and spending analytics.",
        tech: ["Next.js", "OpenAI API", "Stripe", "MongoDB"],
    },
];

// --- Utilities ---
const wrap = (n, max) => (n + max) % max;
const lerp = (a, b, t) => a + (b - a) * t;

class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(x, y) { this.x = x; this.y = y; }
    lerp(v, t) {
        this.x = lerp(this.x, v.x, t);
        this.y = lerp(this.y, v.y, t);
    }
}

class Raf {
    constructor() {
        this.rafId = 0;
        this.callbacks = [];
        this.raf = this.raf.bind(this);
        this.start();
    }
    start() { this.raf(); }
    stop() { cancelAnimationFrame(this.rafId); }
    raf() {
        this.callbacks.forEach(({ callback }) => callback());
        this.rafId = requestAnimationFrame(this.raf);
    }
    add(callback, id) { this.callbacks.push({ callback, id }); }
    remove(id) { this.callbacks = this.callbacks.filter(c => c.id !== id); }
}

const FeaturedWorks = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedId, setSelectedId] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const rafRef = useRef(null);
    const tiltInstances = useRef([]);

    // Initialize Raf
    useEffect(() => {
        rafRef.current = new Raf();
        return () => rafRef.current.stop();
    }, []);

    // Tilt Logic Function
    const createTilt = (node, options) => {
        const trigger = options?.trigger ?? node;
        const targets = options?.target ? (Array.isArray(options.target) ? options.target : [options.target]) : [node];

        let lerpAmount = 0.06;
        const rotDeg = { current: new Vec2(), target: new Vec2() };
        const bgPos = { current: new Vec2(), target: new Vec2() };

        const ticker = () => {
            rotDeg.current.lerp(rotDeg.target, lerpAmount);
            bgPos.current.lerp(bgPos.target, lerpAmount);
            targets.forEach(el => {
                if (!el) return;
                el.style.setProperty("--rotX", rotDeg.current.y.toFixed(2) + "deg");
                el.style.setProperty("--rotY", rotDeg.current.x.toFixed(2) + "deg");
                el.style.setProperty("--bgPosX", bgPos.current.x.toFixed(2) + "%");
                el.style.setProperty("--bgPosY", bgPos.current.y.toFixed(2) + "%");
            });
        };

        const onMouseMove = (e) => {
            const rect = trigger.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            lerpAmount = 0.1;
            targets.forEach(el => {
                if (!el) return;
                const ox = (offsetX - el.clientWidth * 0.5) / (Math.PI * 10);
                const oy = -(offsetY - el.clientHeight * 0.5) / (Math.PI * 12);
                rotDeg.target.set(ox, oy);
                bgPos.target.set(-ox * 0.1, oy * 0.1);
            });
        };

        const onMouseLeave = () => {
            lerpAmount = 0.06;
            rotDeg.target.set(0, 0);
            bgPos.target.set(0, 0);
        };

        trigger.addEventListener("mousemove", onMouseMove);
        trigger.addEventListener("mouseleave", onMouseLeave);
        const id = Math.random().toString(36).substr(2, 9);
        rafRef.current.add(ticker, id);

        return () => {
            trigger.removeEventListener("mousemove", onMouseMove);
            trigger.removeEventListener("mouseleave", onMouseLeave);
            rafRef.current.remove(id);
        };
    };

    // Handle slide change
    const changeSlide = (direction) => {
        setCurrentIndex(prev => wrap(prev + direction, projects.length));
    };

    // Calculate item states
    const getSlideState = (index) => {
        if (index === currentIndex) return 'current';
        if (index === wrap(currentIndex + 1, projects.length)) return 'next';
        if (index === wrap(currentIndex - 1, projects.length)) return 'previous';
        return null;
    };

    // Loading simulation
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Effect to attach tilt to current slide
    useEffect(() => {
        if (!isLoaded) return;

        // Clear previous instances
        tiltInstances.current.forEach(destroy => destroy());
        tiltInstances.current = [];

        // Attach to current slide and its info
        const currentSlideEl = document.querySelector(`.slide[data-current]`);
        const currentInfoEl = document.querySelector(`.slide-info[data-current]`);

        if (currentSlideEl && currentInfoEl) {
            const slideInner = currentSlideEl.querySelector('.slide__inner');
            const infoInner = currentInfoEl.querySelector('.slide-info__inner');

            const destroy = createTilt(currentSlideEl, { target: [slideInner, infoInner] });
            tiltInstances.current.push(destroy);
        }

        return () => {
            tiltInstances.current.forEach(destroy => destroy());
        };
    }, [currentIndex, isLoaded]);

    // Auto-scroll logic
    useEffect(() => {
        let timeoutId;

        const resetTimer = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                changeSlide(1);
            }, 2000);
        };

        const handleInteraction = () => {
            resetTimer();
        };

        // Listen for mouse movement and clicks to reset timer
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('mousedown', handleInteraction);

        // Start initial timer
        resetTimer();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('mousedown', handleInteraction);
        };
    }, [currentIndex]); // Reset on currentIndex change to trigger after manual navigation too

    const activeProject = projects[currentIndex];

    return (
        <section id="featured-works" className="featured-works-section py-24">
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        className="loader-container"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="loader__text">LOADING...</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container mx-auto px-6 text-center md:text-left z-10"
            >
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Works</h3>
            </motion.div>

            <div className="slider">
                <button className="slider--btn slider--btn__prev" onClick={() => changeSlide(-1)}>
                    <ChevronLeft size={40} />
                </button>

                <div className="slides__wrapper">
                    <div className="slides">
                        {projects.map((project, index) => {
                            const state = getSlideState(index);
                            return (
                                <React.Fragment key={project.id}>
                                    <div
                                        className="slide"
                                        data-current={state === 'current' ? '' : undefined}
                                        data-next={state === 'next' ? '' : undefined}
                                        data-previous={state === 'previous' ? '' : undefined}
                                        onClick={() => {
                                            if (state === 'current') setSelectedId(project.id);
                                            else if (state === 'next') changeSlide(1);
                                            else if (state === 'previous') changeSlide(-1);
                                        }}
                                    >
                                        <div className="slide__inner">
                                            <div className="slide--image__wrapper">
                                                <img className="slide--image" src={project.image} alt={project.title} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>

                    <div className="slides--infos">
                        {projects.map((project, index) => {
                            const state = getSlideState(index);
                            return (
                                <div
                                    key={project.id}
                                    className="slide-info"
                                    data-current={state === 'current' ? '' : undefined}
                                >
                                    <div className="slide-info__inner">
                                        <div className="slide-info--text__wrapper">
                                            <div data-title className="slide-info--text">
                                                <span>{project.title}</span>
                                            </div>
                                            <div data-subtitle className="slide-info--text">
                                                <span>{project.category}</span>
                                            </div>
                                            <div data-description className="slide-info--text">
                                                <span>{project.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="slider--btn slider--btn__next" onClick={() => changeSlide(1)}>
                    <ChevronRight size={40} />
                </button>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedId(null)} />

                        <motion.div
                            layoutId={selectedId}
                            className="bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 p-2 bg-black/50 rounded-full text-white hover:bg-primary transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            {(() => {
                                const project = projects.find(p => p.id === selectedId);
                                return (
                                    <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
                                        <div className="md:w-1/2 relative h-64 md:h-auto">
                                            <img src={project.video} alt={project.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                                        </div>

                                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col">
                                            <span className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">{project.category}</span>
                                            <h2 className="text-4xl font-bold text-white mb-6">{project.title}</h2>
                                            <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                                                {project.description}
                                            </p>

                                            <div className="mb-10">
                                                <h4 className="text-white font-bold mb-4">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map(t => (
                                                        <span key={t} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm border border-zinc-700 font-medium">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                                <button className="flex-1 py-4 bg-primary text-white rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg shadow-primary/20">
                                                    <ExternalLink size={20} /> Live Demo
                                                </button>
                                                <button className="flex-1 py-4 bg-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-700 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                                    <Github size={20} /> Source Code
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
        </section>
    );
};

export default FeaturedWorks;
