import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import pic2 from './Images/pic2.png';
import './Styles/Home.css';

const Home = () => {
    const mountRef = useRef(null);
    let renderer;

    useEffect(() => {
        
        gsap.fromTo(".home-image", 
                    { scale: 0, opacity: 0, rotation: 720 }, 
                    { duration: 1.5, scale: 1, opacity: 1, rotation: 0, ease: "elastic.out(1, 0.3)", delay: 0.5 });
        gsap.fromTo(".home-text", 
                    { x: -200, opacity: 0 }, 
                    { duration: 1.5, x: 0, opacity: 1, ease: "power3.out", delay: 0.7 });

        // Three.js Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        
        const isMobile = window.innerWidth <= 768; // Check if it's a mobile device
        const torusSize = isMobile ? 5 : 10; // Smaller size for mobile
        const geometry = new THREE.TorusGeometry(7, 3, 30, 70);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF6347, wireframe: false });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);
    
        const pointLight = new THREE.PointLight(0xFFFFFF);
        pointLight.position.set(20, 20, 20);
        scene.add(pointLight);
    
        camera.position.z = 30;
    
        const animate = () => {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
    
        animate();
    
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        }
    }, []);

    return (
        <div className="home-container">
            <div ref={mountRef} className="threejs-scene"></div>
            <div className="home-content">
                <img className="home-image" src={pic2} alt="Elnatan Tesfa" />
                <div className="home-text">
                    <h1>Hi there! I am Elnatan Tesfa</h1>
                    <p>A highly dedicated senior college student and a full-stack web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;


