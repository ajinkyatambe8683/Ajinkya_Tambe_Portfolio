import React from 'react';
import { Briefcase, GraduationCap, BookOpen, Award } from 'lucide-react';

const Timeline = () => {
    const timelineItems = [
        {
            date: "12/2023 - 01/2024",
            title: "Data Science Intern",
            organization: "Neual Pvt. Ltd.",
            location: "Bavdhan, Pune",
            icon: <Briefcase size={20} />,
            side: "left",
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
            side: "right",
            text: "Pursued Engineering with a specialized focus on AI paradigms, advanced statistical analysis, machine learning algorithms, database management systems, and modern web software architectures."
        },
        {
            date: "Higher Secondary (HSC)",
            title: "Science Stream (72.63%)",
            organization: "Modern Junior College",
            location: "Yamunanagar, Nigdi, Pune",
            icon: <BookOpen size={20} />,
            side: "left"
        },
        {
            date: "Secondary School (SSC)",
            title: "General Studies (90.60%)",
            organization: "Modern High School",
            location: "Yamunanagar, Nigdi, Pune",
            icon: <Award size={20} />,
            side: "right"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
