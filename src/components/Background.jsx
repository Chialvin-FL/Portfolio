import React, { useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Antigravity from './Antigravity';

const Background = () => {
    // Generate 30 random blobs spread vertically
    const blobs = useMemo(() => {
        const colors = [
            'bg-primary/10',
            'bg-indigo-500/10',
            'bg-sky-400/10',
            'bg-blue-600/10',
            'bg-purple-500/10',
        ];

        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: `${Math.floor(Math.random() * 300 + 300)}px`,
            // Spread across the whole vertical height (0% to 100%)
            // And horizontal width (0% to 100%)
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 90 - 10}%`, // -10% to 80% to keep some on screen
            duration: Math.random() * 20 + 20,
            delay: Math.random() * -20, // Negative delay for immediate start at random phase
            moveX: Math.random() * 100 - 50,
            moveY: Math.random() * 100 - 50,
        }));
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-dark bg-gradient-to-b from-dark via-secondary/20 to-dark">
            {/* Global 3D Particle Animation - Sticky to stay in viewport while scrolling */}
            <div className="sticky top-0 h-screen w-full z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <Antigravity count={150} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Vertically distributed blobs */}
            <div className="absolute inset-0 z-0">
                {blobs.map((blob) => (
                    <motion.div
                        key={blob.id}
                        className={`absolute rounded-full blur-[120px] ${blob.color}`}
                        style={{
                            width: blob.size,
                            height: blob.size,
                            top: blob.top,
                            left: blob.left,
                        }}
                        animate={{
                            x: [0, blob.moveX, 0],
                            y: [0, blob.moveY, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: blob.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: blob.delay,
                        }}
                    />
                ))}
            </div>

            {/* Subtle noise overlay - sticky so it stays visible while scrolling */}
            <div className="sticky top-0 h-screen w-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
        </div>
    );
};

export default Background;
