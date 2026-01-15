import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h2 style={{ marginBottom: '10px' }}>Contact</h2>
            <a href="mailto:anliliwas1@gmail.com" style={contactStyle}>anliliwas1@gmail.com</a>
        </div>
    );
};

const contactStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
};

export default ContactInfo;

