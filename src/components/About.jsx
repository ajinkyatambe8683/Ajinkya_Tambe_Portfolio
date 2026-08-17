import React from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">A brief overview of who I am and what I do</p>
                </div>

                <div className="about-grid">
                    {/* Left Column: Visual Profile Photo & Details Panel */}
                    <div className="about-visual scroll-reveal fade-up">
                        <div className="profile-img-frame">
                            <img src={profileImg} alt="Ajinkya Tambe" className="profile-photo" />
                        </div>
                        
                        <div className="about-details">
                            <div className="about-detail-item">
                                <span className="detail-label">Location:</span>
                                <span className="detail-val">Pune, Maharashtra, India</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="detail-label">Email:</span>
                                <span className="detail-val">
                                    <a href="mailto:ajinkyatambe8683@gmail.com">ajinkyatambe8683@gmail.com</a>
                                </span>
                            </div>
                            <div className="about-detail-item">
                                <span className="detail-label">Phone:</span>
                                <span className="detail-val">
                                    <a href="tel:+919356829240">+91 93568 29240</a>
                                </span>
                            </div>
                        </div>

                        {/* Download Resume Button */}
                        <div className="about-actions" style={{ marginTop: '25px', width: '100%', maxWidth: '280px' }}>
                            <a 
                                href="/Ajinkya_Sakharam_Tambe_Resume.pdf" 
                                download="Ajinkya_Sakharam_Tambe_Resume.pdf" 
                                className="btn btn-primary btn-block"
                                style={{ width: '100%' }}
                            >
                                <Download size={18} />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Biography & Stats Grid */}
                    <div className="about-content scroll-reveal fade-up delay-2">
                        <h3 className="about-greeting">Creating Impactful Web & Mobile Experiences</h3>
                        <p className="about-text">
                            I am a detail-oriented Full Stack Developer with experience in building and deploying robust web and mobile applications. Possessing a solid foundation in modern frontend technologies like React and React Native, alongside robust backend principles and database management systems.
                        </p>
                        <p className="about-text">
                            My focus is on developing highly responsive user interfaces, optimizing application performance, and delivering scalable solutions in agile environments. I am passionate about creating efficient, maintainable applications that enhance user experience and drive business value.
                        </p>
                        
                        {/* Statistics Grid Nested Underneath Bio */}
                        <div className="about-stats">
                            <div className="stat-card">
                                <span className="stat-num">2+</span>
                                <span className="stat-name">Core Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num">1</span>
                                <span className="stat-name">Internship Completed</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num">B.E.</span>
                                <span className="stat-name">AI & Data Science</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-num">90.6%</span>
                                <span className="stat-name">SSC Distinction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
