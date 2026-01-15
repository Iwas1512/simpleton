import React from 'react';

const QuickLinks: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <a href="/path/to/resume.pdf" style={linkStyle}>Resume</a>
            <a href="/path/to/current-job" style={linkStyle}>Current Job</a>
            <a href="https://www.linkedin.com/in/yourprofile" style={linkStyle}>LinkedIn</a>
            <a href="https://github.com/yourusername" style={linkStyle}>GitHub</a>
        </div>
    );
};

const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '5px 0',
    transition: 'background-color 0.3s',
};

export default QuickLinks;