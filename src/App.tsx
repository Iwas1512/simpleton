import React from 'react';
import QuickLinks from './components/QuickLinks';
import ContactInfo from './components/ContactInfo';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>My Portfolio</h1>
            <QuickLinks />
            <ContactInfo />
        </div>
    );
};

export default App;