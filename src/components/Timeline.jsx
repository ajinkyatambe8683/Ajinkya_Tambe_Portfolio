import React, { useState } from 'react';
import { Briefcase, GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Timeline = () => {
    const [activeCertificate, setActiveCertificate] = useState(null);

    const timelineItems = [
        {
            date: "July 2026",
            title: "Full Stack Java & React Developer Course",
            organization: "JSpiders Java Training Center",
            location: "Pune, Maharashtra",
            icon: <Award size={20} />,
            side: "left",
            points: [
                "Mastered Core Java programming, OOP principles, collections framework, and multi-threading.",
                "Learned Advanced Java concepts and database design using MySQL/SQL queries (joins, indexing).",
                "Built responsive, modern frontends using HTML5, CSS3, ES6+ JavaScript, and React.js."
            ],
            certificateLink: "/Course Completion Certificate.pdf"
        },
        {
            date: "12/2023 - 01/2024",
            title: "Data Science Intern",
            organization: "Neual Pvt. Ltd.",
            location: "Bavdhan, Pune",
            icon: <Briefcase size={20} />,
            side: "right",
            points: [
                "Developed a python-based data analysis system to process real-world weather datasets (temperature, humidity).",
                "Performed data cleaning, preprocessing, and statistical analysis to improve data quality.",
                "Created visual reports to identify seasonal patterns and trends.",
                "Implemented a linear regression model to predict temperature variations."
            ]
        },
        {
            date: "BE (Graduation)",
            title: "Artificial Intelligence & Data Science Engineering",
            organization: "Genba Sopanrao Moze College of Engineering",
            location: "Balewadi, Pune",
            icon: <GraduationCap size={20} />,
            side: "left",
            text: "Pursued Engineering with a specialized focus on AI paradigms, advanced statistical analysis, machine learning algorithms, database management systems, and modern web software architectures."
        },
        {
            date: "Higher Secondary (HSC)",
            title: "Science Stream (72.63%)",
            organization: "Modern Junior College",
            location: "Yamunanagar, Nigdi, Pune",
            icon: <BookOpen size={20} />,
            side: "right"
        },
        {
            date: "Secondary School (SSC)",
            title: "General Studies (90.60%)",
            organization: "Modern High School",
            location: "Yamunanagar, Nigdi, Pune",
            icon: <Award size={20} />,
            side: "left"
        }
    ];

    return (
        <section id="experience" className="timeline-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">My Journey</h2>
                    <p className="section-subtitle">Internships and academic background</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineItems.map((item, idx) => (
                        <div key={idx} className="timeline-item scroll-reveal fade-up">
                            <div className="timeline-dot">
                                {item.icon}
                            </div>
                            <div className={`timeline-card ${item.side}`}>
                                <div className="timeline-card-header">
                                    <span className="timeline-date">{item.date}</span>
                                    <h3 className="timeline-card-title">{item.title}</h3>
                                    <h4 className="timeline-card-org">
                                        {item.organization} | <span className="location">{item.location}</span>
                                    </h4>
                                </div>
                                {item.points && (
                                    <div className="timeline-card-body">
                                        <ul>
                                            {item.points.map((pt, pIdx) => (
                                                <li key={pIdx}>{pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.text && (
                                    <div className="timeline-card-body">
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{item.text}</p>
                                    </div>
                                )}
                                {item.certificateLink && (
                                    <div className="timeline-card-footer" style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                                        <a 
                                            href={item.certificateLink} 
                                            className="timeline-cert-link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setActiveCertificate({
                                                    url: item.certificateLink,
                                                    title: "Course Completion Certificate",
                                                    organization: item.organization
                                                });
                                            }}
                                            style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center', 
                                                gap: '6px', 
                                                fontSize: '0.88rem', 
                                                color: 'var(--color-primary)', 
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'color var(--transition-fast)'
                                            }}
                                        >
                                            <ExternalLink size={16} />
                                            <span>{item.title.toLowerCase().includes('course') ? 'View Course Certificate' : 'View Internship Certificate'}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {activeCertificate && (
                <CertificateModal 
                    certificate={activeCertificate} 
                    onClose={() => setActiveCertificate(null)} 
                />
            )}
        </section>
    );
};

export default Timeline;
