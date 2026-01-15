import React from 'react';

const RecentProject: React.FC = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Recent Project</h2>
            <div style={projectContainerStyle}>
                <a 
                    href="https://github.com/anthonyhana04/PostureGuard-HTN-2025" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glass-button" 
                    style={linkStyle}
                >
                    PostureGuard AI
                </a>
                <p style={commentStyle}>hack the north 2025</p>
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

const projectContainerStyle: React.CSSProperties = {
    paddingLeft: '10px',
};

const linkStyle: React.CSSProperties = {
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
};

const commentStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '14px',
    margin: '5px 0 0 0',
    fontStyle: 'italic',
};

export default RecentProject;

