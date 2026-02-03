import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Get In Touch</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Create Something Amazing.</h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Have a project in mind? We are always looking for new challenges and opportunities to collaborate.
                            Send us a message and let's start the conversation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email Us</p>
                                    <p className="font-medium">hello@devduo.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-medium">San Francisco, CA (Remote Friendly)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="bg-secondary p-8 rounded-3xl border border-white/5 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm ml-1">Project Type</label>
                                <select className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all">
                                    <option>Web Development</option>
                                    <option>Mobile App</option>
                                    <option>UI/UX Design</option>
                                    <option>Consulting</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-primary focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-primary to-indigo-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
