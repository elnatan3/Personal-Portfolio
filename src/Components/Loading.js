import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Loading = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color('lightblack'), 0.1); // Light black background

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Sphere Geometry
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0x0095DD, shininess: 100 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Particle System
        const particleGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10; // Random position data
        }
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: 'white'
        });
        const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleMesh);

        // Lighting
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(2, 3, 4);
        scene.add(pointLight);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.01; // Spinning effect
            particleMesh.rotation.y -= 0.01; // Rotating particles
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default Loading;
