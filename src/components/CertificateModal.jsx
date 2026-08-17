import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const CertificateModal = ({ certificate, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        // Handle Escape key to close modal
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!certificate) return null;

    return (
        <div className="certificate-modal-overlay" onClick={onClose}>
            <div 
                className="certificate-modal-container glass-panel" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="certificate-modal-header">
                    <div className="certificate-modal-title-wrapper">
                        <h3 className="certificate-modal-title">{certificate.title}</h3>
                        <p className="certificate-modal-subtitle">{certificate.organization}</p>
                    </div>
                    <div className="certificate-modal-actions">
                        <a 
                            href={certificate.url} 
                            download 
                            className="certificate-modal-btn" 
                            title="Download Certificate"
                        >
                            <Download size={18} />
                            <span className="btn-text">Download</span>
                        </a>
                        <a 
                            href={certificate.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="certificate-modal-btn" 
                            title="Open in New Tab"
                        >
                            <ExternalLink size={18} />
                            <span className="btn-text">New Tab</span>
                        </a>
                        <button 
                            onClick={onClose} 
                            className="certificate-modal-close" 
                            title="Close"
                            aria-label="Close modal"
                        >
                            <X size={22} />
                        </button>
                    </div>
                </div>
                <div className="certificate-modal-body">
                    <iframe 
                        src={`${certificate.url}#toolbar=0`} 
                        title={certificate.title} 
                        className="certificate-iframe"
                    />
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;
