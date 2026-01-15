import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Contact</h2>
            <a href="mailto:anliliwas1@gmail.com" className="glass-button" style={contactStyle}>anliliwas1@gmail.com</a>
        </div>
    );
};

const sectionStyle: React.CSSProperties = {
    marginBottom: '25px',
    width: '100%',
    maxWidth: '600px',
};

const headingStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    paddingBottom: '5px',
};

const contactStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    display: 'inline-block',
    cursor: 'pointer',
    width: 'fit-content',
    backgroundColor: 'transparent',
    marginLeft: '10px',
};

export default ContactInfo;

