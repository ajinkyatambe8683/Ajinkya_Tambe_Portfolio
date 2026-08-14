import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="text-accent-red" size={24} />,
            glowClass: "red-glow",
            chipClass: "red-chip",
            skills: [
                "React.js",
                "React Native",
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Responsive Design"
            ]
        },
        {
            title: "Backend Development",
            icon: <Server className="text-accent-indigo" size={24} />,
            glowClass: "indigo-glow",
            chipClass: "indigo-chip",
            skills: [
                "Core Java",
                "OOP Principles",
                "REST APIs",
                "Exception Handling"
            ]
        },
        {
            title: "Database Management",
            icon: <Database className="text-accent-cyan" size={24} />,
            glowClass: "cyan-glow",
            chipClass: "cyan-chip",
            skills: [
                "MySQL",
                "Relational Database Design",
                "SQL Queries",
                "Joins",
                "Indexing"
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section section-padding section-bg">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">My professional toolbox & technologies I work with</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skills-category scroll-reveal fade-up">
                            <div className="category-header">
                                <div className={`category-icon-wrapper ${category.glowClass}`}>
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-chips">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className={`skill-chip ${category.chipClass}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
