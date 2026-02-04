import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particle = ({ x, y, z, size, color }) => {
    const mesh = useRef();
    const initialY = y;
    const speed = useMemo(() => Math.random() * 0.01 + 0.005, []);
    const offset = useMemo(() => Math.random() * Math.PI * 2, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Floating motion
        mesh.current.position.y += speed;
        mesh.current.position.x = x + Math.sin(time + offset) * 0.2;

        // Reset position when it goes too high with a buffer
        if (mesh.current.position.y > 10) {
            mesh.current.position.y = -10;
        }
    });

    return (
        <mesh ref={mesh} position={[x, y, z]}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
    );
};

const Antigravity = ({ count = 100 }) => {
    const { viewport } = useThree();

    const particles = useMemo(() => {
        const temp = [];
        const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#06b6d4']; // Primary/Indigo/Purple/Cyan

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * viewport.width * 1.5;
            const y = (Math.random() - 0.5) * viewport.height * 2;
            const z = (Math.random() - 0.5) * 10 - 5; // Depth
            const size = Math.random() * 0.05 + 0.01;
            const color = colors[Math.floor(Math.random() * colors.length)];

            temp.push({ x, y, z, size, color });
        }
        return temp;
    }, [count, viewport]);

    return (
        <group>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            {particles.map((data, i) => (
                <Particle key={i} {...data} />
            ))}
        </group>
    );
};

export default Antigravity;
