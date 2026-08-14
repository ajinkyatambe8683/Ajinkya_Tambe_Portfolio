import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);
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

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="main-header">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
                    <span className="logo-accent">&lt;</span>Ajinkya<span className="logo-accent"> /&gt;</span>
                </a>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-actions">
                    <a href="#contact" className="btn btn-secondary contact-btn-nav" onClick={(e) => handleLinkClick(e, 'contact')}>
                        Hire Me
                    </a>
                    <button className="mobile-toggle" id="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
