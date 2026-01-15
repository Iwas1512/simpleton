import React from 'react';
import QuickLinks from './components/QuickLinks';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>My Portfolio</h1>
            <QuickLinks />
        </div>
    );
};

export default App;