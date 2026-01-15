import React from 'react';

const QuickLinks: React.FC = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Links</h2>
            <div style={linksContainerStyle}>
                <a href="https://www.linkedin.com/in/anlil-iwas-b7aa892a9" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
                <a href="https://github.com/Iwas1512" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
            </div>
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

const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px',
};

const linkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '3px 0',
    transition: 'opacity 0.3s',
};

export default QuickLinks;