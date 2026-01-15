import React from 'react';

const Profile: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
            <div style={imageContainerStyle}>
                <img 
                    src="/unnamed.jpg" 
                    alt="Profile" 
                    style={profileImageStyle}
                />
            </div>
        </div>
    );
};

const imageContainerStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '15px',
};

const profileImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
    transform: 'scale(1.2)',
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

