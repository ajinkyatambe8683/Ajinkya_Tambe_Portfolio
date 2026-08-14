import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';

// Custom SVG components for brand icons
const GithubIcon = ({ size = 20, ...props }) => (
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

const LinkedinIcon = ({ size = 20, ...props }) => (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        const fieldName = id.replace('form-', '');
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, message: '' });

        setTimeout(() => {
            setStatus({
                submitting: false,
                success: true,
                message: `Success! Thank you, ${formData.name}. Your message has been sent. I will get back to you at ${formData.email} shortly.`
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setStatus(prev => ({ ...prev, message: '' }));
            }, 6000);

        }, 1500);
    };

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="section-header scroll-reveal fade-up">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's discuss projects, opportunities, or collaboration</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-panel scroll-reveal fade-up">
                        <h3>Connect With Me</h3>
                        <p>Feel free to reach out to me via phone, email, or connect with me on LinkedIn and GitHub. I'm always open to discussing new software development projects, design systems, or internship positions.</p>
                        
                        <div className="contact-methods">
                            <div className="contact-card-item">
                                <div className="contact-card-icon">
                                    <Mail size={22} />
                                </div>
                                <div className="contact-card-details">
                                    <h4>Email Me</h4>
                                    <a href="mailto:ajinkyatambe8683@gmail.com">ajinkyatambe8683@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-card-item">
                                <div className="contact-card-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="contact-card-details">
                                    <h4>Call Me</h4>
                                    <a href="tel:+919356829240">+91 93568 29240</a>
                                </div>
                            </div>

                            <div className="contact-card-item">
                                <div className="contact-card-icon">
                                    <LinkedinIcon size={22} />
                                </div>
                                <div className="contact-card-details">
                                    <h4>LinkedIn</h4>
                                    <a href="https://linkedin.com/in/ajinkya-sakharam-tambe" target="_blank" rel="noopener noreferrer">ajinkya-sakharam-tambe</a>
                                </div>
                            </div>

                            <div className="contact-card-item">
                                <div className="contact-card-icon">
                                    <GithubIcon size={22} />
                                </div>
                                <div className="contact-card-details">
                                    <h4>GitHub Profile</h4>
                                    <a href="https://github.com/ajinkyatambe8683" target="_blank" rel="noopener noreferrer">ajinkyatambe8683</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel scroll-reveal fade-up delay-2">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="form-name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="form-name" 
                                        required 
                                        placeholder="Ajinkya Tambe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="form-email" 
                                    required 
                                    placeholder="ajinkya@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="form-subject" 
                                    required 
                                    placeholder="Project Collaboration"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-message">Message</label>
                                <textarea 
                                    id="form-message" 
                                    rows="5" 
                                    required 
                                    placeholder="Hi Ajinkya, I would love to talk about..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block form-submit-btn"
                                disabled={status.submitting}
                            >
                                <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
                                {status.submitting ? (
                                    <Loader2 size={18} className="spin-animation" />
                                ) : (
                                    <Send size={18} />
                                )}
                            </button>

                            {status.message && (
                                <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
