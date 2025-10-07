import React, { useState } from 'react';
import MoneyTab from './components/MoneyTab.jsx';
import Navigation from './components/Navigation.jsx';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('money'); // Default to 'money' tab

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Personal Productivity Hub</h1>
      </header>
      
      <main>
        {/* Conditionally render the component based on the active tab */}
        {activeTab === 'money' && <MoneyTab />}
        {activeTab === 'habit' && <h2>Habit Tracker Coming Soon!</h2>}
      </main>
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;