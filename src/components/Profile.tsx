import React from 'react';

const Profile: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <img 
                src="/profile-picture.jpg" 
                alt="Profile" 
                style={profileImageStyle}
            />
            <p style={statusStyle}>
                Software Developer @ UIC - developing uic.edu and prev: software engineer @ WM
            </p>
        </div>
    );
};

const profileImageStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid rgba(255, 255, 255, 0.2)',
};

const statusStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '16px',
    margin: '0',
    padding: '10px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '5px',
    maxWidth: '600px',
};

export default Profile;

