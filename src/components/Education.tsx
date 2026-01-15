import React from 'react';

const Education: React.FC = () => {
    return (
        <div style={sectionStyle}>
            <h2 style={headingStyle}>Education</h2>
            <p style={contentStyle}>Computer Science Student @ University of Illinois at Chicago - 3.9/4.0 GPA</p>
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
    margin: '0',
    paddingLeft: '10px',
};

export default Education;

