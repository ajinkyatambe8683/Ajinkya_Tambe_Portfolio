import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCodeElements from './components/BackgroundCodeElements';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // --- 1. Intersection Observer for Scroll Reveals ---
        const revealElements = document.querySelectorAll('.scroll-reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target); // Reveal only once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        // --- 2. Intersection Observer for Nav Section Highlighting ---
        const sections = document.querySelectorAll('section');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.getAttribute('id'));
                }
            });
        }, {
            threshold: 0.25,
            rootMargin: '-80px 0px 0px 0px' // offset for the navbar
        });

        sections.forEach(section => {
            navObserver.observe(section);
        });

        // --- 3. Cursor Spotlight & Parallax Tracking ---
        const handleMouseMove = (e) => {
            const wrapper = document.querySelector('.app-wrapper');
            if (wrapper) {
                // Raw spotlight coordinate
                wrapper.style.setProperty('--mouse-x', `${e.clientX}px`);
                wrapper.style.setProperty('--mouse-y', `${e.clientY}px`);
                
                // Normalized coordinates relative to window center (-1 to 1)
                const offsetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
                const offsetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
                wrapper.style.setProperty('--mouse-offset-x', offsetX);
                wrapper.style.setProperty('--mouse-offset-y', offsetY);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            revealElements.forEach(element => revealObserver.unobserve(element));
            sections.forEach(section => navObserver.unobserve(section));
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="app-wrapper">
            {/* Shifting Parallax Liquid Gradient Mesh Background */}
            <div className="bg-mesh-container">
                <div className="mesh-blob mesh-blob-1"></div>
                <div className="mesh-blob mesh-blob-2"></div>
                <div className="mesh-blob mesh-blob-3"></div>
                <div className="mesh-blob mesh-blob-4"></div>
            </div>

            {/* Interactive Cursor Spotlight Background Hover Effect */}
            <div className="mouse-spotlight"></div>

            {/* Subtle floating background code elements */}
            <BackgroundCodeElements />

            {/* Rotational Background Compass Watermark (Large Detailed Sharp Blueprint) */}
            <div className="bg-compass-container">
                <svg viewBox="0 0 200 200" className="bg-compass">
                    {/* Concentric Grid Rings */}
                    <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
                    <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.15" />
                    <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="0.6" fill="none" strokeDasharray="1 2.5" opacity="0.3" />
                    <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="0.5 1.5" opacity="0.2" />
                    
                    <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.12" />
                    <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="2 2" opacity="0.15" />
                    
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.1" />
                    <circle cx="100" cy="100" r="47" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="1 1" opacity="0.1" />
                    
                    <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.08" />
                    <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
                    
                    {/* Polar Coordinate Radial Crosshairs */}
                    <line x1="100" y1="1" x2="100" y2="199" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
                    <line x1="1" y1="100" x2="199" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
                    <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" strokeWidth="0.2" opacity="0.08" />
                    <line x1="30" y1="170" x2="170" y2="30" stroke="currentColor" strokeWidth="0.2" opacity="0.08" />
                    
                    {/* Cardinal Major Marks */}
                    <line x1="100" y1="1" x2="100" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="100" y1="188" x2="100" y2="199" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="1" y1="100" x2="12" y2="100" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="188" y1="100" x2="199" y2="100" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Intercardinal Major Marks */}
                    <line x1="31" y1="31" x2="40" y2="40" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="169" y1="31" x2="160" y2="40" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="31" y1="169" x2="40" y2="160" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="169" y1="169" x2="160" y2="160" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
 
                    {/* Highly Detailed Circular Sub-division Ticks */}
                    {/* Quad 1 */}
                    <line x1="126" y1="7" x2="124" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="150" y1="13" x2="145" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="174" y1="26" x2="168" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="187" y1="50" x2="179" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="193" y1="74" x2="184" y2="76" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 2 */}
                    <line x1="193" y1="126" x2="184" y2="124" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="187" y1="150" x2="179" y2="145" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="174" y1="174" x2="168" y2="168" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="150" y1="187" x2="145" y2="179" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="126" y1="193" x2="124" y2="184" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 3 */}
                    <line x1="74" y1="193" x2="76" y2="184" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="50" y1="187" x2="55" y2="179" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="26" y1="174" x2="32" y2="168" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="13" y1="150" x2="21" y2="145" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="7" y1="126" x2="16" y2="124" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 4 */}
                    <line x1="7" y1="74" x2="16" y2="76" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="13" y1="50" x2="21" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="26" y1="26" x2="32" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="50" y1="13" x2="55" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="74" y1="7" x2="76" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
 
                    {/* Cardinal Points Labels */}
                    <text x="100" y="22" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">N</text>
                    <text x="100" y="30" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">0°</text>
                    
                    <text x="179" y="103" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">E</text>
                    <text x="169" y="103" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">90°</text>
                    
                    <text x="100" y="183" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">S</text>
                    <text x="100" y="175" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">180°</text>
                    
                    <text x="21" y="103" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">W</text>
                    <text x="32" y="103" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">270°</text>
 
                    {/* Intercardinal Labels */}
                    <text x="146" y="55" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">NE</text>
                    <text x="146" y="151" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">SE</text>
                    <text x="54" y="151" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">SW</text>
                    <text x="54" y="55" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">NW</text>
 
                    {/* Geographic Coordinates Watermark along axes */}
                    <text x="100" y="62" textAnchor="middle" fontSize="4.5" fill="currentColor" fontFamily="monospace" opacity="0.3" letterSpacing="0.8">PUNE, MH, IN</text>
                    <text x="100" y="142" textAnchor="middle" fontSize="4" fill="currentColor" fontFamily="monospace" opacity="0.3" letterSpacing="0.5">18°31'N 73°51'E</text>
 
                    {/* Sharp Compass Needle (animated independently) */}
                    <g className="compass-needle">
                        {/* Ultra Sharp North Arrow Tip */}
                        <polygon points="100,15 95,100 100,90" fill="#FF6B00" opacity="0.85" />
                        <polygon points="100,15 105,100 100,90" fill="#F59E0B" opacity="0.7" />
                        
                        {/* South Arrow Tip */}
                        <polygon points="100,185 95,100 100,110" fill="#FF5555" opacity="0.4" />
                        <polygon points="100,185 105,100 100,110" fill="#FF5555" opacity="0.2" />
                        
                        {/* Center Pivot circles */}
                        <circle cx="100" cy="100" r="4.5" fill="var(--color-bg)" stroke="currentColor" strokeWidth="0.8" />
                        <circle cx="100" cy="100" r="1.5" fill="currentColor" />
                    </g>
                </svg>
            </div>

            {/* Secondary Rotational Background Compass Watermark (Small Bottom Left Blueprint) */}
            <div className="bg-compass-container secondary">
                <svg viewBox="0 0 200 200" className="bg-compass reverse">
                    {/* Concentric Grid Rings */}
                    <circle cx="100" cy="100" r="99" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
                    <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.15" />
                    <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="0.6" fill="none" strokeDasharray="1 2.5" opacity="0.3" />
                    <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="0.5 1.5" opacity="0.2" />
                    
                    <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.12" />
                    <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="2 2" opacity="0.15" />
                    
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.1" />
                    <circle cx="100" cy="100" r="47" stroke="currentColor" strokeWidth="0.4" fill="none" strokeDasharray="1 1" opacity="0.1" />
                    
                    <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.08" />
                    <circle cx="100" cy="100" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
                    
                    {/* Polar Coordinate Radial Crosshairs */}
                    <line x1="100" y1="1" x2="100" y2="199" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
                    <line x1="1" y1="100" x2="199" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
                    <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" strokeWidth="0.2" opacity="0.08" />
                    <line x1="30" y1="170" x2="170" y2="30" stroke="currentColor" strokeWidth="0.2" opacity="0.08" />
                    
                    {/* Cardinal Major Marks */}
                    <line x1="100" y1="1" x2="100" y2="12" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="100" y1="188" x2="100" y2="199" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="1" y1="100" x2="12" y2="100" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="188" y1="100" x2="199" y2="100" stroke="currentColor" strokeWidth="1.5" />
                    
                    {/* Intercardinal Major Marks */}
                    <line x1="31" y1="31" x2="40" y2="40" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="169" y1="31" x2="160" y2="40" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="31" y1="169" x2="40" y2="160" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
                    <line x1="169" y1="169" x2="160" y2="160" stroke="currentColor" strokeWidth="1.0" opacity="0.6" />
 
                    {/* Highly Detailed Circular Sub-division Ticks */}
                    {/* Quad 1 */}
                    <line x1="126" y1="7" x2="124" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="150" y1="13" x2="145" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="174" y1="26" x2="168" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="187" y1="50" x2="179" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="193" y1="74" x2="184" y2="76" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 2 */}
                    <line x1="193" y1="126" x2="184" y2="124" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="187" y1="150" x2="179" y2="145" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="174" y1="174" x2="168" y2="168" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="150" y1="187" x2="145" y2="179" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="126" y1="193" x2="124" y2="184" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 3 */}
                    <line x1="74" y1="193" x2="76" y2="184" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="50" y1="187" x2="55" y2="179" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="26" y1="174" x2="32" y2="168" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="13" y1="150" x2="21" y2="145" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="7" y1="126" x2="16" y2="124" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    {/* Quad 4 */}
                    <line x1="7" y1="74" x2="16" y2="76" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="13" y1="50" x2="21" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="26" y1="26" x2="32" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="50" y1="13" x2="55" y2="21" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
                    <line x1="74" y1="7" x2="76" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
 
                    {/* Cardinal Points Labels */}
                    <text x="100" y="22" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">N</text>
                    <text x="100" y="30" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">0°</text>
                    
                    <text x="179" y="103" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">E</text>
                    <text x="169" y="103" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">90°</text>
                    
                    <text x="100" y="183" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">S</text>
                    <text x="100" y="175" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">180°</text>
                    
                    <text x="21" y="103" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="900" opacity="0.7">W</text>
                    <text x="32" y="103" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.4">270°</text>
 
                    {/* Intercardinal Labels */}
                    <text x="146" y="55" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">NE</text>
                    <text x="146" y="151" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">SE</text>
                    <text x="54" y="151" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">SW</text>
                    <text x="54" y="55" textAnchor="middle" fontSize="5" fill="currentColor" fontWeight="700" opacity="0.5">NW</text>
 
                    {/* Geographic Coordinates Watermark along axes */}
                    <text x="100" y="62" textAnchor="middle" fontSize="4.5" fill="currentColor" fontFamily="monospace" opacity="0.3" letterSpacing="0.8">PUNE, MH, IN</text>
                    <text x="100" y="142" textAnchor="middle" fontSize="4" fill="currentColor" fontFamily="monospace" opacity="0.3" letterSpacing="0.5">18°31'N 73°51'E</text>
 
                    {/* Sharp Compass Needle (animated independently) */}
                    <g className="compass-needle">
                        {/* Ultra Sharp North Arrow Tip */}
                        <polygon points="100,15 95,100 100,90" fill="#FF6B00" opacity="0.85" />
                        <polygon points="100,15 105,100 100,90" fill="#F59E0B" opacity="0.7" />
                        
                        {/* South Arrow Tip */}
                        <polygon points="100,185 95,100 100,110" fill="#FF5555" opacity="0.4" />
                        <polygon points="100,185 105,100 100,110" fill="#FF5555" opacity="0.2" />
                        
                        {/* Center Pivot circles */}
                        <circle cx="100" cy="100" r="4.5" fill="var(--color-bg)" stroke="currentColor" strokeWidth="0.8" />
                    </g>
                </svg>
            </div>

            {/* Laptop Blueprint Watermark (Subtle Left Center Web Indicator) */}
            <div className="bg-laptop-container blueprint-watermark">
                <svg viewBox="0 0 200 200" className="bg-blueprint bg-blueprint-laptop">
                    {/* Grid / Tech circles */}
                    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" />
                    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.3" fill="none" strokeDasharray="1 3" opacity="0.2" />
                    <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
                    
                    {/* Polar grid lines */}
                    <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.1" />
                    <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" opacity="0.1" />
                    
                    {/* Laptop outline */}
                    {/* Screen outer frame */}
                    <rect x="45" y="55" width="110" height="70" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    {/* Screen inner area */}
                    <rect x="50" y="60" width="100" height="60" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.8" />
                    
                    {/* Keyboard / base section */}
                    <path d="M40,125 L160,125 L175,138 L25,138 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    {/* Laptop hinge detail */}
                    <rect x="90" y="125" width="20" height="3" stroke="currentColor" strokeWidth="0.6" fill="none" />
                    
                    {/* Trackpad */}
                    <rect x="88" y="129" width="24" height="8" rx="1" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.7" />
                    
                    {/* Decorative code lines / mockup inside screen */}
                    <line x1="55" y1="68" x2="85" y2="68" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                    <line x1="55" y1="75" x2="125" y2="75" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                    <line x1="55" y1="82" x2="110" y2="82" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                    <line x1="65" y1="89" x2="95" y2="89" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                    <line x1="65" y1="96" x2="135" y2="96" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                    <line x1="55" y1="103" x2="100" y2="103" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                    <line x1="55" y1="110" x2="75" y2="110" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    
                    {/* Tech Text Watermark details */}
                    <text x="100" y="45" textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="monospace" fontWeight="700" letterSpacing="1" opacity="0.5">WEB RESPONSIVE PLATFORM</text>
                    <text x="25" y="152" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.4">W: 1920px</text>
                    <text x="145" y="152" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.4">H: 1080px</text>
                    <text x="100" y="175" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="monospace" opacity="0.3">SYSTEM_CORE: REACT.JS</text>
                </svg>
            </div>

            {/* Mobile Blueprint Watermark (Subtle Right Center Mobile Indicator) */}
            <div className="bg-mobile-container blueprint-watermark">
                <svg viewBox="0 0 200 200" className="bg-blueprint bg-blueprint-mobile">
                    {/* Concentric blueprint circles */}
                    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.12" />
                    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 2" fill="none" opacity="0.15" />
                    
                    {/* Crosshairs */}
                    <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                    <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
                    
                    {/* Mobile device frame */}
                    <rect x="65" y="35" width="70" height="130" rx="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    {/* Mobile screen outer border */}
                    <rect x="69" y="39" width="62" height="122" rx="7" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.8" />
                    
                    {/* Notch/Dynamic Island */}
                    <rect x="88" y="43" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.6" />
                    
                    {/* App Mockup GUI lines inside screen */}
                    {/* App Header */}
                    <rect x="74" y="49" width="52" height="8" rx="1.5" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    {/* App Hero / graphic banner */}
                    <rect x="74" y="60" width="52" height="28" rx="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    {/* App card grid */}
                    <rect x="74" y="92" width="23" height="20" rx="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    <rect x="103" y="92" width="23" height="20" rx="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    <rect x="74" y="116" width="52" height="12" rx="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    <rect x="74" y="132" width="52" height="12" rx="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    
                    {/* Home indicator bar */}
                    <line x1="90" y1="157" x2="110" y2="157" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                    
                    {/* Tech Text Watermark details */}
                    <text x="100" y="24" textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="monospace" fontWeight="700" letterSpacing="1" opacity="0.5">MOBILE APPLICATION</text>
                    <text x="32" y="178" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.4">DPI: 460</text>
                    <text x="135" y="178" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.4">viewport-y</text>
                    <text x="100" y="185" textAnchor="middle" fontSize="5.5" fill="currentColor" fontFamily="monospace" opacity="0.3">NATIVE_PLATFORM: REACT NATIVE</text>
                </svg>
            </div>

            {/* Layout Components */}
            <Header activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Timeline />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
