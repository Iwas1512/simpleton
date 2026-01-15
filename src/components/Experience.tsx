import React from 'react';

const Experience: React.FC = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Experience</h2>
            <p style={contentStyle}>Software Developer @ UIC - developing <a href="https://uic.edu" target="_blank" rel="noopener noreferrer" className="glass-button" style={linkStyle}>uic.edu</a></p>
            <p style={contentStyle}>prev: software engineer @ <a href="https://wm.com" target="_blank" rel="noopener noreferrer" className="glass-button" style={linkStyle}>WM</a></p>
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

const contentStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '16px',
    margin: '5px 0',
    paddingLeft: '10px',
};

const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '4px 8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    display: 'inline-block',
    cursor: 'pointer',
    backgroundColor: 'transparent',
};

export default Experience;

