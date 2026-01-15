import React from 'react';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';
import RecentProject from './components/RecentProject';
import QuickLinks from './components/QuickLinks';
import ContactInfo from './components/ContactInfo';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>Anlil Iwas</h1>
            <Profile />
            <Experience />
            <Education />
            <RecentProject />
            <QuickLinks />
            <ContactInfo />
        </div>
    );
};

export default App;