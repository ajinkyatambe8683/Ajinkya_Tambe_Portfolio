import React from 'react';

const Footer = () => {
    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
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
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <a href="#home" className="logo" onClick={(e) => handleScrollTo(e, 'home')}>
                        &lt;Ajinkya /&gt;
                    </a>
                    <p>Building high-performance web and mobile solutions.</p>
                </div>
                
                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
                        <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a></li>
                        <li><a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')}>Skills</a></li>
                        <li><a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')}>Experience</a></li>
                        <li><a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')}>Projects</a></li>
                    </ul>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ajinkya Tambe. All rights reserved.</p>
                    <p>Designed and built with passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
