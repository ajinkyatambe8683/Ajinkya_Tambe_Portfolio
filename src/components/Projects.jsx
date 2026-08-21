import React from 'react';
import { ExternalLink, ShieldCheck, Building2, ShieldAlert } from 'lucide-react';
import pcmcScreenshot from '../assets/pcmc-screenshot.png';
import ddosScreenshot from '../assets/ddos-protection.png';

// Custom GithubIcon component
const GithubIcon = ({ size = 16, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Projects = () => {
    const projectList = [
        {
            title: "City Corporation Complaint Portal (PCMC)",
            date: "01/2026 - 02/2026",
            image: pcmcScreenshot,
            bgClass: "project-p1-gradient",
            icon: <Building2 className="project-bg-icon" size={80} />,
            tags: ["JavaScript", "Flexbox / Grid", "DOM Manipulation"],
            description: "A responsive web-based City Complaint Management Portal enabling citizens to report civic issues efficiently. Features dynamic single-page navigation and image uploads with live preview.",
            features: [
                "Dynamic single-page navigation using JavaScript DOM.",
                "Custom responsive layout via CSS Flexbox and Grid.",
                "Image upload integration with instantaneous preview."
            ],
            codeUrl: "https://github.com/ajinkyatambe8683/Corporation-Complaint-Portal-",
            demoUrl: "https://corporation-complaint-portal.vercel.app/"
        },
        {
            title: "DDoS Attack Prevention System",
            date: "12/2024 - 01/2025",
            image: ddosScreenshot,
            bgClass: "project-p2-gradient",
            icon: <ShieldAlert className="project-bg-icon" size={80} />,
            tags: ["Network Security", "Wireshark", "Rate Limiting"],
            description: "A network security mechanism to detect and mitigate Distributed Denial of Service attacks, utilizing rate-limiting and IP-blocking techniques to shield backend servers.",
            features: [
                "Analysis of network packets to identify malicious behavior.",
                "Rate-limiting and IP-blocking system configuration.",
                "Simulated stress testing evaluated via Wireshark."
            ],
            codeUrl: "https://github.com/ajinkyatambe8683",
            demoUrl: "#contact"
        }
    ];

    const handleScrollToContact = (e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="projects" className="projects-section section-padding section-bg">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Some of my key software and security systems</p>
                </div>

                <div className="projects-grid">
                    {projectList.map((project, idx) => (
                        <article key={idx} className="project-card scroll-reveal fade-up">
                            <div className="project-image-container">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="project-image" 
                                    />
                                ) : (
                                    <div className={`project-graphic-placeholder ${project.bgClass}`}>
                                        {project.icon}
                                    </div>
                                )}
                                <span className="project-badge-overlay">{project.date}</span>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-features">
                                    {project.features.map((feature, fIdx) => (
                                        <li key={fIdx}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link-btn"
                                        title="View Source"
                                    >
                                        <GithubIcon size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        className="project-link-btn primary"
                                        title="View Demo"
                                        onClick={project.demoUrl.startsWith('#') ? handleScrollToContact : undefined}
                                    >
                                        {idx === 0 ? <ExternalLink size={16} /> : <ShieldCheck size={16} />}
                                        <span>{idx === 0 ? "Live Demo" : "Details"}</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
